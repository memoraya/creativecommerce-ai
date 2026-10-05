"use client";

import { useState } from "react";
import type { Film } from "../films.config";
import FilmCard from "./FilmCard";
import Reveal from "./Reveal";

// Coordinates "only one film plays at a time" across the gallery: a single
// activeId lives here, and each FilmPlayer pauses itself when it's no
// longer the active one (see FilmPlayer's effect).
//
// Layout is fixed by position — see the comment in films.config.ts:
// [0] + [3] are full-width horizontal, [1] + [2] are the centered
// portrait pair.
export default function FilmGallery({ films }: { films: Film[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [horizontalFirst, portraitA, portraitB, horizontalLast] = films;

  return (
    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-28">
      {horizontalFirst && (
        <Reveal>
          <FilmCard
            film={horizontalFirst}
            isActive={activeId === horizontalFirst.id}
            onRequestPlay={() => setActiveId(horizontalFirst.id)}
          />
        </Reveal>
      )}

      {(portraitA || portraitB) && (
        <div className="flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:justify-center sm:gap-10 lg:gap-16">
          {[portraitA, portraitB].map(
            (film) =>
              film && (
                <Reveal key={film.id} className="w-full sm:max-w-[420px]">
                  <FilmCard
                    film={film}
                    isActive={activeId === film.id}
                    onRequestPlay={() => setActiveId(film.id)}
                  />
                </Reveal>
              ),
          )}
        </div>
      )}

      {horizontalLast && (
        <Reveal>
          <FilmCard
            film={horizontalLast}
            isActive={activeId === horizontalLast.id}
            onRequestPlay={() => setActiveId(horizontalLast.id)}
          />
        </Reveal>
      )}
    </div>
  );
}
