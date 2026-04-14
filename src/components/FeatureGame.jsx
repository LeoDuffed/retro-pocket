import { Link } from "react-router-dom";

export default function FeaturedGame() {
  return (
    <section className="rounded-4xl border border-white/10 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        Juego destacado
      </p>

      <div className="mt-4 flex gap-4">

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900">Tetris</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            El clásico juego de bloques llega a Retro Pocket con una estética
            compacta y perfecta para una consola retro programable.
          </p>

          <Link 
            className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            to={`/juegos/tetris`} 
          >
              Ver juego
          </Link>
        </div>
      </div>
    </section>
  );
}