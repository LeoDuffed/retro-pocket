import { Link } from "react-router-dom";

const games = [
  { id: 1, name: "Snake", path: "/juegos/snake", logoSrc: "/img/snake.png" },
  { id: 2, name: "Breakout", path: "/juegos/breakout", logoSrc: "/img/breakout.png" },
  { id: 3, name: "Dodge", path: "/juegos/dodge", logoSrc: "/img/dodge.png" },
  { id: 4, name: "Space Invaders", path: "/juegos/space", logoSrc: "/img/space.png" },
];

export default function GamesPanel() {
  return (
    <aside className="rounded-4xl border border-white/10 bg-white/6 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm m-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Juegos</h2>
        <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-300">
          {games.length} disponible{games.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="space-y-3 mt-8">
        {games.map((game) => (
          <Link
            key={game.id}
            to={game.path}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-900">
              <img
                src={game.logoSrc}
                alt={`Logo de ${game.name}`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <p className="font-semibold">{game.name}</p>
              <p className="text-xs text-slate-500">Ir a la página del juego</p>
            </div>

            <span className="text-slate-400 transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
      
    </aside>
  );
}
