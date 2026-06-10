import { useState } from "react";
import { Link } from "react-router-dom";

const LAST_GAME_STORAGE_KEY = "retro-pocket:last-game-slug";

const games = [
  {
    id: 1,
    title: "Snake",
    slug: "snake",
    genre: "Arcade",
    difficulty: "Media",
    description: "Crece lo más posible sin chocar.",
    logoSrc: "/img/snake.png",
  },
  {
    id: 2,
    title: "Breakout",
    slug: "breakout",
    genre: "Arcade",
    difficulty: "Media",
    description: "Rompe todos los bloques y evita que la pelota caiga.",
    logoSrc: "/img/breakout.png",
  },
  {
    id: 3,
    title: "Dodge Obstacles",
    slug: "dodge",
    genre: "Arcade",
    difficulty: "Fácil",
    description: "Esquiva los objetos que caen del cielo.",
    logoSrc: "/img/dodge.png",
  },
  {
    id: 4,
    title: "Space Invaders",
    slug: "space",
    genre: "Arcade",
    difficulty: "Difícil",
    description: "Sobrevive al ataque de las naves eliminándolas.",
    logoSrc: "/img/space.png",
  },
  {
    id: 5,
    title: "Pong",
    slug: "pong",
    genre: "Arcade",
    difficulty: "Media",
    description: "No pierdas la pelota, haz que rebote sin parar.",
    logoSrc: "/img/pong.png",
  },
  {
    id: 6,
    title: "Flapy",
    slug: "flapy",
    genre: "Arcade",
    difficulty: "Difícil",
    description: "No le peges a las columnas y avanza lo mas que puedas.",
    logoSrc: "/img/flapy.png"
  },
  {
    id: 7,
    title: "Jump N Run",
    slug: "jump",
    genre: "Arcade",
    difficulty: "Media",
    description: "Salta los obstaculos que encuentres.",
    logoSrc: "/img/jump.png",
  },
];

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getCardState(offset, total) {
  if (offset === 0) {
    return {
      visible: true,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      z: 40,
      width: "360px",
    };
  }

  if (offset === 1) {
    return {
      visible: true,
      x: 285,
      y: 38,
      scale: 0.94,
      opacity: 0.9,
      z: 30,
      width: "280px",
    };
  }

  if (offset === total - 1) {
    return {
      visible: true,
      x: -285,
      y: 38,
      scale: 0.94,
      opacity: 0.9,
      z: 30,
      width: "280px",
    };
  }

  if (offset === 2) {
    return {
      visible: true,
      x: 465,
      y: 68,
      scale: 0.86,
      opacity: 0.5,
      z: 20,
      width: "210px",
      desktopOnly: true,
    };
  }

  if (offset === total - 2) {
    return {
      visible: true,
      x: -465,
      y: 68,
      scale: 0.86,
      opacity: 0.5,
      z: 20,
      width: "210px",
      desktopOnly: true,
    };
  }

  return { visible: false };
}

export default function Juegos() {
  const [activeIndex, setActiveIndex] = useState(() => {
    try {
      const lastGameSlug = window.localStorage.getItem(LAST_GAME_STORAGE_KEY);
      const lastGameIndex = games.findIndex((game) => game.slug === lastGameSlug);

      return lastGameIndex === -1 ? 0 : lastGameIndex;
    } catch {
      return 0;
    }
  });
  const centerOffset = games.length % 2 === 0 ? -60 : 0;

  const goLeft = () => {
    setActiveIndex((prev) => mod(prev - 1, games.length));
  };

  const goRight = () => {
    setActiveIndex((prev) => mod(prev + 1, games.length));
  };

  return (
    <main className="w-full">
      <section className="w-full rounded-[2.5rem] border border-white/10 bg-white/4 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm md:p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-300">Biblioteca</p>
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Juegos
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              Explora los minijuegos disponibles para Retro Pocket.
            </p>
            <span className="mt-4 inline-flex items-center rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-300">
              {games.length} disponible{games.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-white transition hover:bg-white/15"
            >
              ←
            </button>

            <button
              onClick={goRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-white transition hover:bg-white/15"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-4xl border border-white/10 bg-[#0b1224]/80 px-2 py-12 sm:px-4 md:px-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#0b1224] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#0b1224] to-transparent md:w-24" />

          <div className="relative mx-auto h-107.5 w-full max-w-245">
            {games.map((game, index) => {
              const offset = mod(index - activeIndex, games.length);
              const state = getCardState(offset, games.length);

              if (!state.visible) return null;

              const isActive = offset === 0;

              return (
                <div
                  key={game.id}
                  className={`absolute left-1/2 top-1/2 ${
                    state.desktopOnly ? "hidden md:block" : ""
                  }`}
                  style={{
                    width: state.width,
                    zIndex: state.z,
                    transform: `translate(-50%, -50%) translate(${
                      state.x + centerOffset
                    }px, ${state.y}px) scale(${state.scale})`,
                    transition:
                      "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                    willChange: "transform, opacity",
                  }}
                >
                  <Link
                    to={`/juegos/${game.slug}`}
                    className="group block rounded-4xl"
                  >
                    <div className="rounded-4xl border border-white/10 bg-white p-4 text-slate-900 shadow-[0_20px_45px_rgba(0,0,0,0.28)] transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                      <div className="mb-4 flex aspect-4/3 items-center justify-center overflow-hidden rounded-3xl bg-slate-950 shadow-inner">
                        <img
                          src={game.logoSrc}
                          alt={`Logo de ${game.title}`}
                          className="h-full w-full object-contain p-3"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="text-xl font-bold">{game.title}</h2>
                          <p className="mt-1 text-sm text-slate-500">
                            {game.genre}
                          </p>
                        </div>

                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-cyan-300">
                          {game.difficulty}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {game.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700">
                          {isActive ? "Juego activo" : "Ver detalles"}
                        </span>
                        <span className="text-lg text-slate-400 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
