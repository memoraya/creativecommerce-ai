"use client";

import { useState } from "react";
import { primaryButton } from "../theme";
import { MENSAJE_MAX_LENGTH } from "../config";

type Status = "idle" | "submitting" | "error" | "sold_out";

const inputClass =
  "w-full rounded-sm border border-[#1C1712]/20 bg-[#FBF6E9] px-4 py-3 text-base text-[#1C1712] placeholder:text-[#6B5E4E]/60 transition-colors focus:border-[#8A2C22] focus:outline-none focus:ring-1 focus:ring-[#8A2C22]";

const labelClass = "text-sm font-medium text-[#1C1712]";

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
      const res = await fetch("/api/ia-sin-computadora/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);

      if (res.status === 409 || data?.error === "sold_out") {
        setStatus("sold_out");
        return;
      }

      if (!res.ok || !data?.url) {
        throw new Error();
      }

      // Full navigation to Stripe's hosted checkout — not a client route.
      window.location.href = data.url;
    } catch {
      setStatus("error");
      setError("Algo salió mal. Intenta de nuevo o escríbenos directamente.");
    }
  }

  if (status === "sold_out") {
    return (
      <div className="rounded-sm border border-[#1C1712]/20 bg-[#FBF6E9] px-6 py-8 text-center">
        <p className="font-display text-xl text-[#1C1712]">
          Se llenó el cupo para este evento.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#4A4238]">
          Los 20 lugares ya están reservados. Escríbenos si quieres que te
          avisemos de la próxima fecha.
        </p>
      </div>
    );
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
          WhatsApp <span className="font-normal text-[#6B5E4E]">(opcional)</span>
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
          <span className="font-normal text-[#6B5E4E]">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          maxLength={MENSAJE_MAX_LENGTH}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntame en un par de líneas…"
        />
        <p className="text-xs leading-relaxed text-[#6B5E4E]">
          Es opcional. Podemos usar algunas de estas respuestas para preparar
          mejor la conversación.
        </p>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-[#8A2C22]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${primaryButton} w-full disabled:opacity-60`}
      >
        {status === "submitting" ? "Conectando con Stripe…" : "Reservar mi lugar — $700 MXN"}
      </button>

      <p className="text-center text-xs text-[#6B5E4E]">
        Pago seguro con Stripe. Tu lugar se confirma al completar el pago.
      </p>
    </form>
  );
}
