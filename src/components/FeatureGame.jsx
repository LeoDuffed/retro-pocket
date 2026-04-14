export default function FeaturedGame() {
  return (
    <section className="liquid-card p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
        Juego destacado
      </p>

      <div className="mt-4 flex gap-4">

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-black">Tetris</h3>

          <p className="mt-2 text-sm leading-6 text-black/70">
            El clásico juego de bloques llega a Retro Pocket con una estética
            compacta y perfecta para una consola retro programable.
          </p>

          <button className="liquid-button mt-4 inline-flex rounded-xl px-4 py-2 text-sm font-medium text-cyan-600 transition hover:text-cyan-100">
            Ver juego
          </button>
        </div>
      </div>
    </section>
  );
}
