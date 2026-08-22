// Non-visual constants for the "IA sin Computadora" event.
// Kept separate from theme.ts (styling) and shared by the register route,
// the Stripe webhook, and the confirmation page.

export const EVENT_ID = "ia-sin-computadora-2026-09-12";
export const EVENT_CAPACITY = 20;
export const TICKET_PRICE_MXN = 700;
export const MENSAJE_MAX_LENGTH = 500;

// TEMPORARY: MVP payment flow bypasses the Stripe checkout API (kept in
// place, unused for now). The registration form now saves to Google Sheets
// (status PENDING, manually reconciled) then sends the visitor to this
// Mercado Pago checkout link. This is the production $700 MXN link.
export const MERCADOPAGO_CHECKOUT_URL = "https://mpago.la/18zgcRJ";
export const MERCADOPAGO_CHECKOUT_LABEL = "$700 MXN";
