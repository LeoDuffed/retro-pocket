import { Link } from "react-router-dom";

const games = [
  { id: 1, name: "Breakout", path: "/juegos/breakout" },
  { id: 2, name: "Pong", path: "/juegos/pong" },
  { id: 3, name: "Snake", path: "/juegos/snake" },
  { id: 4, name: "Tetris", path: "/juegos/tetris" },
];

export default function GamesPanel() {
  return (
    <aside className="liquid-card p-8 m-10 ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-black">Juegos</h2>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white-200">
          4 disponibles
        </span>
      </div>

      <div className="mt-14 space-y-3">
        {games.map((game, index) => (
          <Link
            key={game.id}
            to={game.path}
            className="liquid-tile group flex items-center gap-3 rounded-2xl px-4 py-3 text-white transition duration-200 hover:-translate-y-0.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-900 text-sm font-bold text-cyan-300">
              
            </div>

            <div className="flex-1">
              <p className="font-semibold text-black/90">{game.name}</p>
              <p className="text-xs text-black/60">Ir a la página del juego</p>
            </div>

            <span className="text-black/60 transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
      
    </aside>
  );
}
