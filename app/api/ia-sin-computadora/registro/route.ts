import { NextResponse } from "next/server";
import { MENSAJE_MAX_LENGTH } from "@/app/ia-sin-computadora/config";

// Pre-payment registration step: forwards to the Google Apps Script web
// app (which writes the Registrations sheet, status PENDING) and, on
// ok:true only, lets the client redirect to the Mercado Pago checkout
// link. Separate from /api/ia-sin-computadora/register (Stripe, untouched)
// — this route never creates a Stripe session or touches Google Sheets
// directly.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const APPS_SCRIPT_TIMEOUT_MS = 10_000;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const whatsapp = typeof body?.whatsapp === "string" ? body.whatsapp.trim() : "";
  const aiBlocker =
    typeof body?.mensaje === "string"
      ? body.mensaje.trim().slice(0, MENSAJE_MAX_LENGTH)
      : "";

  if (!nombre || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_input" },
      { status: 400 },
    );
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.REGISTRATION_SECRET;
  if (!scriptUrl || !secret) {
    console.error(
      "[ia-sin-computadora] registration is not configured (missing GOOGLE_APPS_SCRIPT_URL or REGISTRATION_SECRET)",
    );
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), APPS_SCRIPT_TIMEOUT_MS);

    let res: Response;
    try {
      res = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, nombre, email, whatsapp, aiBlocker }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    const data = await res.json().catch(() => null);

    if (!res.ok || data?.ok !== true) {
      console.error(
        "[ia-sin-computadora] Apps Script registration failed",
        res.status,
        data,
      );
      return NextResponse.json(
        { ok: false, error: "server_error" },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[ia-sin-computadora] failed to reach Apps Script", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
