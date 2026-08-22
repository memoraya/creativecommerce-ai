import Stripe from "stripe";

let client: Stripe | null = null;

export function getStripeClient(): Stripe {
  if (!client) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not configured.");
    }
    client = new Stripe(key);
  }
  return client;
}

// Best-effort only: once capacity is reached we try to close any other
// still-open checkout sessions for this event so late payers see an expired
// session instead of succeeding into an oversold seat. Sessions also expire
// on their own after 24h regardless, so a failure here just means someone
// might complete a stale checkout — handled manually, per the accepted
// race-condition tradeoff.
export async function expireOtherOpenSessions(
  eventId: string,
  keepSessionId: string,
): Promise<void> {
  const stripe = getStripeClient();
  const open = await stripe.checkout.sessions.list({ status: "open", limit: 100 });
  const targets = open.data.filter(
    (session) => session.metadata?.event_id === eventId && session.id !== keepSessionId,
  );

  const results = await Promise.allSettled(
    targets.map((session) => stripe.checkout.sessions.expire(session.id)),
  );

  results.forEach((result, i) => {
    if (result.status === "rejected") {
      console.error(
        `[ia-sin-computadora] failed to expire session ${targets[i].id}`,
        result.reason,
      );
    }
  });
}
