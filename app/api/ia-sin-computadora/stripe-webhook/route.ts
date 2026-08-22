import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { EVENT_CAPACITY, EVENT_ID } from "@/app/ia-sin-computadora/config";
import {
  appendAttendeeRow,
  countPaidAttendees,
  isSessionAlreadyRecorded,
} from "@/app/ia-sin-computadora/lib/sheets";
import { expireOtherOpenSessions, getStripeClient } from "@/app/ia-sin-computadora/lib/stripe";

// Needs the Node runtime (not edge) for Stripe's signature verification.
export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { ok: false, error: "missing_signature" },
      { status: 400 },
    );
  }

  const rawBody = await request.text();
  const stripe = getStripeClient();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("[ia-sin-computadora] webhook signature verification failed", err);
    return NextResponse.json(
      { ok: false, error: "invalid_signature" },
      { status: 400 },
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Webhook verification is the source of truth for "paid" — the register
  // route never writes to Sheets, only this handler does, and only here.
  if (session.metadata?.event_id !== EVENT_ID || session.payment_status !== "paid") {
    return NextResponse.json({ ok: true, ignored: true });
  }

  try {
    // Stripe retries webhooks; never append the same session twice.
    if (await isSessionAlreadyRecorded(session.id)) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    await appendAttendeeRow({
      timestamp: new Date().toISOString(),
      nombre: session.metadata?.nombre ?? "",
      email: session.metadata?.email ?? session.customer_details?.email ?? "",
      whatsapp: session.metadata?.whatsapp ?? "",
      mensaje: session.metadata?.mensaje ?? "",
      montoMxn: (session.amount_total ?? 0) / 100,
      stripeSessionId: session.id,
      stripePaymentIntentId:
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : (session.payment_intent?.id ?? ""),
      eventId: EVENT_ID,
    });

    const paidCount = await countPaidAttendees();
    if (paidCount >= EVENT_CAPACITY) {
      await expireOtherOpenSessions(EVENT_ID, session.id);
    }
  } catch (err) {
    // Return 500 so Stripe retries — losing a paid attendee is worse than
    // a duplicate webhook delivery, which isSessionAlreadyRecorded guards.
    console.error("[ia-sin-computadora] failed to record attendee", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
