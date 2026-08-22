import EventVideo from "./components/EventVideo";
import Scribble from "./components/Scribble";
import { MERCADOPAGO_CHECKOUT_URL } from "./config";
import { cardShell, kicker, primaryButton, sectionShell, venue } from "./theme";

const CONTRASTS = [
  {
    not: "No se trata de memorizar prompts.",
    but: "Se trata de aprender a describir mejor lo que quieres.",
  },
  {
    not: "No se trata de conocer todas las herramientas.",
    but: "Se trata de sentirte cómodo explorando herramientas nuevas.",
  },
  {
    not: "No se trata de aceptar la primera respuesta.",
    but: "Se trata de aprender a evaluar, cuestionar e iterar.",
  },
  {
    not: "No se trata de delegarle tu criterio a la IA.",
    but: "Se trata de hacer que tu experiencia y tu criterio valgan más.",
  },
];

const TAKEAWAYS = [
  "Entender mejor el lenguaje actual de la IA sin perderte en tecnicismos.",
  "Aprender por qué describir y dar contexto cambia radicalmente los resultados.",
  "Entender el valor de iterar: primera respuesta, segunda respuesta, tercera respuesta.",
  "Desarrollar más criterio para evaluar lo que la IA produce.",
  "Entender cómo experiencia + IA pueden trabajar juntas.",
  "Llevarte 10 ideas prácticas para empezar a trabajar diferente desde el día siguiente.",
];

const AUDIENCE = [
  "Ya usas alguna herramienta de IA, aunque sea ocasionalmente.",
  "Trabajas en una empresa, ejerces una profesión o tienes un negocio.",
  "Sientes que podrías estar aprovechando mucho más esta tecnología.",
  "Te interesa entenderla sin convertirte en especialista técnico.",
  "Tienes curiosidad sobre cómo puede cambiar tu forma de trabajar.",
];

const INCLUDES = [
  "2 bebidas en Café Reynard",
  "Glosario de IA",
  "Workbook",
  "Conversación en vivo de 2 horas",
];

export default function IaSinComputadoraPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={`${sectionShell} pt-14 pb-12 sm:pt-20 sm:pb-16`}>
        <p className={kicker}>Conversación en vivo · Ciudad de México</p>

        <h1 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl">
          IA SIN
          <br />
          <Scribble>COMPUTADORA</Scribble>
        </h1>

        <p className="mt-7 font-display text-xl italic leading-snug text-[#3A322A] sm:text-2xl">
          Para quien ya usa IA&hellip; pero siente que apenas empieza.
        </p>

        <p className="mt-5 max-w-md text-base leading-relaxed text-[#4A4238]">
          Una conversación de dos horas para entender mejor cómo pensar,
          explorar y trabajar con inteligencia artificial.
        </p>

        <dl className="mt-8 flex flex-col gap-2.5 border-y border-[#1C1712]/15 py-5 font-mono text-[13px] text-[#3A322A] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <div className="flex gap-2">
            <dt className="text-[#8A2C22]">·</dt>
            <dd>Sábado 12 de septiembre · 11:00 AM</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-[#8A2C22]">·</dt>
            <dd>Café Reynard · Roma Sur, CDMX</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-[#8A2C22]">·</dt>
            <dd>$700 MXN · Solo 20 lugares</dd>
          </div>
        </dl>

        <a href="#registro" className={`${primaryButton} mt-8`}>
          Reservar mi lugar
        </a>
      </section>

      {/* ── Video ─────────────────────────────────────────────── */}
      <section className={`${sectionShell} pb-16 sm:pb-20`}>
        <EventVideo />
      </section>

      {/* ── Why this conversation exists ─────────────────────── */}
      <section className={`${sectionShell} py-14 sm:py-20`}>
        <p className={kicker}>Por qué esta conversación</p>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#3A322A]">
          <p>
            Probablemente ya usaste ChatGPT. Escribes, investigas, resumes o
            generas ideas con IA de vez en cuando.
          </p>
          <p>
            Pero usar IA ocasionalmente y aprender a trabajar con ella son
            cosas muy distintas.
          </p>
          <p>
            Después de suficientes horas experimentando empiezan a aparecer
            patrones: cómo describir mejor lo que quieres, cómo dar contexto,
            cómo juzgar una respuesta, cómo iterar y cuándo confiar
            &mdash;o no confiar&mdash; en lo que recibes.
          </p>
          <p className="font-display text-xl text-[#1C1712]">
            De eso se trata esta conversación.
          </p>
        </div>
      </section>

      {/* ── Not this / More like this ────────────────────────── */}
      <section className={`${sectionShell} py-14 sm:py-20`}>
        <p className={kicker}>Lo que no es · Lo que sí es</p>
        <div className="mt-8 divide-y divide-[#1C1712]/10">
          {CONTRASTS.map((item) => (
            <div key={item.not} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
              <p className="text-base text-[#8A7F6F] line-through decoration-[#8A2C22]/50">
                {item.not}
              </p>
              <span aria-hidden className="hidden font-display text-xl text-[#8A2C22]/60 sm:block">
                →
              </span>
              <p className="font-display text-xl text-[#1C1712] sm:text-2xl">
                {item.but}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What you'll take away ────────────────────────────── */}
      <section className={`${sectionShell} py-14 sm:py-20`}>
        <p className={kicker}>En dos horas&hellip;</p>
        <ul className="mt-8 space-y-5">
          {TAKEAWAYS.map((item, i) => (
            <li key={item} className="flex gap-4">
              <span className="font-display text-lg text-[#8A2C22]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-relaxed text-[#3A322A]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Who it's for ──────────────────────────────────────── */}
      <section className={`${sectionShell} py-14 sm:py-20`}>
        <p className={kicker}>Esto probablemente es para ti si&hellip;</p>
        <ul className="mt-8 space-y-4">
          {AUDIENCE.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-[#3A322A]">
              <span aria-hidden className="text-[#8A2C22]">
                &mdash;
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className={`${cardShell} mt-8 px-5 py-4 font-display text-lg text-[#1C1712]`}>
          No necesitas conocimientos técnicos.
        </p>
      </section>

      {/* ── Event details ─────────────────────────────────────── */}
      <section className={`${sectionShell} py-14 sm:py-20`}>
        <div className={`${cardShell} relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10`}>
          <p className={kicker}>El evento</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            IA sin Computadora
          </h2>

          <div className="mt-8 grid gap-6 border-t border-[#1C1712]/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A7F6F]">
                Cuándo
              </p>
              <p className="mt-1.5 text-lg text-[#1C1712]">
                Sábado 12 de septiembre
                <br />
                11:00 AM
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A7F6F]">
                Dónde
              </p>
              <p className="mt-1.5 text-lg text-[#1C1712]">
                {venue.name}
                <br />
                {venue.address}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A7F6F]">
                Cupo
              </p>
              <p className="mt-1.5 text-lg text-[#1C1712]">Máximo 20 personas</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A7F6F]">
                Costo
              </p>
              <p className="mt-1.5 text-lg text-[#1C1712]">$700 MXN</p>
            </div>
          </div>

          <div className="mt-8 border-t border-dashed border-[#1C1712]/20 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A7F6F]">
              Incluye
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {INCLUDES.map((item) => (
                <li key={item} className="text-base text-[#3A322A]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Registration ──────────────────────────────────────── */}
      {/* TEMPORARY MVP: links straight to a Mercado Pago checkout link
          instead of the Stripe registration form/API (kept in place,
          unused for now). See MERCADOPAGO_CHECKOUT_URL in ./config. */}
      <section id="registro" className={`${sectionShell} py-14 sm:py-20`}>
        <p className={kicker}>Reserva tu lugar</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Solo 20 lugares.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4A4238]">
          Reserva tu lugar con un pago directo a través de Mercado Pago.
        </p>
        <div className="mt-8">
          <a
            href={MERCADOPAGO_CHECKOUT_URL}
            className={`${primaryButton} w-full sm:w-auto`}
          >
            Reservar mi lugar
          </a>
          <p className="mt-4 text-center text-xs text-[#6B5E4E] sm:text-left">
            Pago seguro con Mercado Pago. Tu lugar se confirma al completar
            el pago.
          </p>
        </div>
      </section>

      {/* ── Attribution ───────────────────────────────────────── */}
      <footer className={`${sectionShell} border-t border-[#1C1712]/10 py-8`}>
        <p className="font-mono text-xs text-[#8A7F6F]">
          Una conversación de Creative Commerce.
        </p>
      </footer>
    </>
  );
}
