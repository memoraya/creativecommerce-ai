// Premium 16:9 video slot. Pass `src` once the cinematic piece exists —
// everything else (frame, caption, placeholder) stays put.
export default function EventVideo({
  src,
  poster,
}: {
  src?: string;
  poster?: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-[#E3D6B8] bg-[#EDE4CC] shadow-[0_1px_0_0_rgba(28,23,18,0.04)]">
      {src ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          controls
          playsInline
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #1C1712 0px, #1C1712 1px, transparent 1px, transparent 14px)",
            }}
            aria-hidden
          />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#1C1712]/30 text-[#1C1712] transition-colors">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20 11 0 22V0Z" />
            </svg>
          </div>
          <p className="relative font-display text-2xl text-[#1C1712] sm:text-3xl">
            IA sin Computadora
          </p>
          <p className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B5E4E]">
            Café Reynard · Roma Sur, CDMX
          </p>
        </div>
      )}
    </div>
  );
}
