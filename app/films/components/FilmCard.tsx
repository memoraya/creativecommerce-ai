import { formatLabel, type Film } from "../films.config";
import { filmsDisplay } from "../fonts";
import FilmPlayer from "./FilmPlayer";

export default function FilmCard({
  film,
  isActive,
  onRequestPlay,
}: {
  film: Film;
  isActive: boolean;
  onRequestPlay: () => void;
}) {
  return (
    <article>
      <FilmPlayer film={film} isActive={isActive} onRequestPlay={onRequestPlay} />

      <div className="mt-5 flex items-start justify-between gap-6 border-t border-[#141414]/10 pt-4">
        <div>
          <p className="font-mono text-xs text-[#141414]/40">{film.id}</p>
          <h3
            className={`${filmsDisplay.className} mt-1 text-2xl uppercase leading-tight tracking-tight sm:text-3xl`}
          >
            {film.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#141414]/60">
            {film.description}
          </p>
        </div>

        <p className="shrink-0 pt-1 text-right font-mono text-[11px] uppercase tracking-[0.15em] whitespace-nowrap text-[#141414]/40">
          {formatLabel(film.aspectRatio)}
        </p>
      </div>
    </article>
  );
}
