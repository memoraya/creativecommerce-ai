"use client";

import { useState } from "react";
import { primaryButton } from "../theme";
import {
  MENSAJE_MAX_LENGTH,
  MERCADOPAGO_CHECKOUT_LABEL,
  MERCADOPAGO_CHECKOUT_URL,
} from "../config";

type Status = "idle" | "submitting" | "error";

const inputClass =
  "w-full rounded-sm border border-[#0B0A09]/20 bg-white px-4 py-3.5 text-base text-[#0B0A09] placeholder:text-[#57514A]/60 transition-colors focus:border-[#D97757] focus:outline-none focus:ring-1 focus:ring-[#D97757]";

const labelClass = "text-sm font-medium text-[#0B0A09]";

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      nombre: String(form.get("nombre") ?? ""),
      email: String(form.get("email") ?? ""),
      whatsapp: String(form.get("whatsapp") ?? ""),
      mensaje: String(form.get("mensaje") ?? ""),
    };

    try {
      const res = await fetch("/api/ia-sin-computadora/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error();
      }

      // Registration saved — only now do we send the visitor to Mercado
      // Pago. Full navigation, not a client route (external checkout).
      window.location.href = MERCADOPAGO_CHECKOUT_URL;
    } catch {
      setStatus("error");
      setError("Algo salió mal. Intenta de nuevo o escríbenos directamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="nombre" className={labelClass}>
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          className={inputClass}
          placeholder="¿Cómo te llamas?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          className={inputClass}
          placeholder="tu@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp <span className="font-normal text-[#57514A]">(opcional)</span>
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={inputClass}
          placeholder="55 1234 5678"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className={labelClass}>
          ¿Qué es lo que más te cuesta hoy al trabajar con IA?{" "}
          <span className="font-normal text-[#57514A]">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          maxLength={MENSAJE_MAX_LENGTH}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntame en un par de líneas…"
        />
        <p className="text-xs leading-relaxed text-[#57514A]">
          Es opcional. Podemos usar algunas de estas respuestas para preparar
          mejor la conversación.
        </p>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-[#D97757]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${primaryButton} w-full disabled:opacity-60`}
      >
        {status === "submitting"
          ? "Guardando tu registro…"
          : `Continuar al pago — ${MERCADOPAGO_CHECKOUT_LABEL}`}
      </button>

      <p className="text-center text-xs text-[#57514A]">
        Serás redirigido a Mercado Pago para completar tu pago.
      </p>
    </form>
  );
}
