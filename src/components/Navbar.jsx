export default function Navbar() {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-10 rounded-full border border-white/15 bg-white/10 px-10 py-4 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <a
          href="#"
          className="text-base font-medium text-white transition hover:text-cyan-300"
        >
          Inicio
        </a>

        <a
          href="#"
          className="text-base font-medium text-white/85 transition hover:text-cyan-300"
        >
          Juegos
        </a>

        <a
          href="#"
          className="text-base font-medium text-white/85 transition hover:text-cyan-300"
        >
          Info
        </a>
      </nav>
    </div>
  );
}
