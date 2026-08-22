import { NextResponse } from "next/server";
import {
  EVENT_CAPACITY,
  EVENT_ID,
  MENSAJE_MAX_LENGTH,
  TICKET_PRICE_MXN,
} from "@/app/ia-sin-computadora/config";
import { countPaidAttendees } from "@/app/ia-sin-computadora/lib/sheets";
import { getStripeClient } from "@/app/ia-sin-computadora/lib/stripe";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const whatsapp = typeof body?.whatsapp === "string" ? body.whatsapp.trim() : "";
  const mensaje =
    typeof body?.mensaje === "string"
      ? body.mensaje.trim().slice(0, MENSAJE_MAX_LENGTH)
      : "";

  if (!nombre || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_input" },
      { status: 400 },
    );
  }

  let paidCount: number;
  try {
    paidCount = await countPaidAttendees();
  } catch (err) {
    console.error("[ia-sin-computadora] failed to read Sheets capacity", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }

  // Best-effort gate — see expireOtherOpenSessions for the matching
  // best-effort cleanup once the 20th paid attendee lands.
  if (paidCount >= EVENT_CAPACITY) {
    return NextResponse.json({ ok: false, error: "sold_out" }, { status: 409 });
  }

  const origin = new URL(request.url).origin;

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "mxn",
            unit_amount: TICKET_PRICE_MXN * 100,
            product_data: {
              name: "IA sin Computadora — 12 de septiembre, Café Reynard",
            },
          },
        },
      ],
      metadata: { event_id: EVENT_ID, nombre, email, whatsapp, mensaje },
      success_url: `${origin}/ia-sin-computadora/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/ia-sin-computadora#registro`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    console.error("[ia-sin-computadora] failed to create checkout session", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}
