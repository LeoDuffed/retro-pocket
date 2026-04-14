export default function ProjectInfo() {
  return (
    <section className="rounded-4xl border border-white/10 bg-white/[0.07] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Proyecto
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">Retro Pocket</h3>

      <p className="mt-3 text-sm leading-7 text-white/75">
        Consola retro programable basada en ATmega16A, diseñada para cargar y
        jugar minijuegos simples mediante una interfaz web.
      </p>
    </section>
  );
}