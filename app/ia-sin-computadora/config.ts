// Non-visual constants for the "IA sin Computadora" event.
// Kept separate from theme.ts (styling) and shared by the register route,
// the Stripe webhook, and the confirmation page.

export const EVENT_ID = "ia-sin-computadora-2026-09-12";
export const EVENT_CAPACITY = 20;
export const TICKET_PRICE_MXN = 700;
export const MENSAJE_MAX_LENGTH = 500;

// TEMPORARY: MVP payment flow bypasses the Stripe registration API/form
// (kept in place, unused for now) and links straight to a Mercado Pago
// checkout link instead. This is the $20 MXN TEST link — swap it for the
// real $700 MXN production link here when ready to go live.
export const MERCADOPAGO_CHECKOUT_URL = "https://mpago.la/2Uz2C4j";
