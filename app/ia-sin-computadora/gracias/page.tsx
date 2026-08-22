import type { Metadata } from "next";
import Link from "next/link";
import { inlineLink, kicker, primaryButton, sectionShell } from "../theme";

// TEMPORARY MVP: static confirmation only, no payment verification. The
// Stripe-based version of this page (session lookup, CalendarLinks) has
// been swapped out for now, not deleted — see git history to restore it
// once the Mercado Pago flow is finalized.
export const metadata: Metadata = {
  title: { absolute: "Tu lugar está reservado — IA sin Computadora" },
};

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/LyFTJ1FKyZd9sgGTQ5ioWg?s=cl&p=i&mlu=4";

export default function GraciasPage() {
  return (
    <section className={`${sectionShell} py-20 text-center sm:py-28`}>
      <p className={kicker}>Reserva confirmada</p>

      <h1 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
        Tu lugar está reservado
      </h1>

      <p className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-[#3A342C]">
        Gracias por tu pago. Conserva tu comprobante; en breve te enviaremos
        la confirmación y los detalles del taller.
      </p>

      <div className="mx-auto mt-12 max-w-sm border-t border-[#0B0A09]/10 pt-10">
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryButton} w-full`}
        >
          Unirme al grupo de WhatsApp
        </a>
        <p className="mt-4 text-sm leading-relaxed text-[#57514A]">
          Ahí compartiremos ubicación, recordatorios y materiales del taller.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/ia-sin-computadora" className={`${inlineLink} text-sm`}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
