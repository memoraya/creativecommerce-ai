import type { Metadata } from "next";
import Link from "next/link";
import { kicker, secondaryButton, sectionShell } from "../theme";

// TEMPORARY MVP: static confirmation only, no payment verification. The
// Stripe-based version of this page (session lookup, CalendarLinks) has
// been swapped out for now, not deleted — see git history to restore it
// once the Mercado Pago flow is finalized.
export const metadata: Metadata = {
  title: { absolute: "Tu lugar está reservado — IA sin Computadora" },
};

export default function GraciasPage() {
  return (
    <section className={`${sectionShell} py-20 text-center sm:py-28`}>
      <p className={kicker}>Reserva confirmada</p>

      <h1 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
        Tu lugar está reservado
      </h1>

      <p className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-[#3A322A]">
        Gracias por tu pago. Conserva tu comprobante; en breve te enviaremos
        la confirmación y los detalles del taller.
      </p>

      <div className="mt-10">
        <Link href="/ia-sin-computadora" className={secondaryButton}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
