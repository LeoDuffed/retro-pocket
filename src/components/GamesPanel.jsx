import { Link } from "react-router-dom";

const games = [
  { id: 1, name: "Breakout", path: "/juegos/breakout" },
  { id: 2, name: "Pong", path: "/juegos/pong" },
  { id: 3, name: "Snake", path: "/juegos/snake" },
  { id: 4, name: "Tetris", path: "/juegos/tetris" },
];

export default function GamesPanel() {
  return (
    <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Juegos</h2>
        <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-300">
          4 disponibles
        </span>
      </div>

      <div className="space-y-3">
        {games.map((game, index) => (
          <Link
            key={game.id}
            to={game.path}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-cyan-300">
              0{index + 1}
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