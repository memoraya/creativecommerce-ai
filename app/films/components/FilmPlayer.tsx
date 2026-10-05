"use client";

import { useEffect, useRef, useState } from "react";
import type { Film } from "../films.config";

// Square-free, aspect-ratio-correct video frame.
//
// - Nothing downloads until the visitor clicks play: no <video> element is
//   mounted at all until `started` is true, so the poster image is the
//   only network request on initial load.
// - `isActive`/`onRequestPlay` let the parent gallery coordinate a single
//   "now playing" film: when a different film becomes active, this one
//   pauses itself.
// - No `src` configured → an intentional, non-interactive placeholder
//   (no play button, nothing misleading).
export default function FilmPlayer({
  film,
  isActive,
  onRequestPlay,
}: {
  film: Film;
  isActive: boolean;
  onRequestPlay: () => void;
}) {
  const { title, src, poster, aspectRatio } = film;
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isActive && started) {
      videoRef.current?.pause();
    }
  }, [isActive, started]);

  const handlePlay = () => {
    setStarted(true);
    onRequestPlay();
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#141414]"
      style={{ aspectRatio }}
    >
      {started && src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          onPlay={onRequestPlay}
        >
          Your browser does not support embedded video. You can{" "}
          <a href={src} className="underline">
            download the file
          </a>{" "}
          instead.
        </video>
      ) : src ? (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#D7FF3F]"
        >
          {poster ? (
            // Placeholder-driven gallery: poster paths are plain public/
            // assets, not optimized remote images, so a plain <img> keeps
            // this simple per the brief.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />
          ) : null}
          <span
            aria-hidden
            className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#F6F5F1]/70 text-[#F6F5F1] transition-colors group-hover:border-[#D7FF3F] group-hover:text-[#D7FF3F] sm:h-20 sm:w-20"
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M18 10 0 20V0Z" />
            </svg>
          </span>
        </button>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-[#F6F5F1]/15 px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F6F5F1]/50">
            Video coming soon
          </p>
        </div>
      )}
    </div>
  );
}
