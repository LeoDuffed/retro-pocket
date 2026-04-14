import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const games = {
  breakout: {
    title: "Breakout",
    genre: "Arcade",
    difficulty: "Media",
    description:
      "Rompe todos los bloques usando la pelota y evita perderla. Una adaptación compacta y retro para Retro Pocket.",
    longDescription:
      "Breakout es un juego clásico de acción y reflejos en el que el objetivo es destruir todos los bloques de la pantalla utilizando una pelota que rebota constantemente. En esta versión para Retro Pocket, el diseño está pensado para partidas rápidas, controles simples y una experiencia ideal para una consola retro programable basada en ATmega16A.",
    controls: ["Mover izquierda", "Mover derecha", "Iniciar/Reiniciar"],
    tags: ["Arcade", "Reflejos", "Retro", "1 jugador", "Rápido"],
    compat: ["Retro Pocket", "ATmega16A", "Pantalla integrada"],
    size: "32 KB",
    players: "1 jugador",
    release: "Versión 1.0",
  },
  pong: {
    title: "Pong",
    genre: "Arcade",
    difficulty: "Fácil",
    description:
      "Controla tu barra y devuelve la pelota en uno de los juegos más icónicos de todos los tiempos.",
    longDescription:
      "Pong es uno de los títulos más representativos de la historia de los videojuegos. Esta adaptación para Retro Pocket mantiene la esencia del juego original con una interfaz minimalista y controles sencillos, ideal para sesiones rápidas y demostraciones del sistema.",
    controls: ["Mover arriba", "Mover abajo", "Iniciar partida"],
    tags: ["Arcade", "Clásico", "Retro", "1 jugador", "Reflejos"],
    compat: ["Retro Pocket", "ATmega16A", "Pantalla integrada"],
    size: "28 KB",
    players: "1 jugador",
    release: "Versión 1.0",
  },
  snake: {
    title: "Snake",
    genre: "Arcade",
    difficulty: "Media",
    description:
      "Haz crecer la serpiente comiendo puntos sin chocar contra los bordes ni contigo mismo.",
    longDescription:
      "Snake es un clásico absoluto de los juegos compactos. En esta versión para Retro Pocket, la serpiente aumenta de tamaño con cada punto consumido y el desafío crece conforme disminuye el espacio disponible. Es un excelente ejemplo de minijuego simple, divertido y perfecto para hardware embebido.",
    controls: ["Arriba", "Abajo", "Izquierda", "Derecha", "Iniciar"],
    tags: ["Arcade", "Retro", "Puntaje", "1 jugador", "Clásico"],
    compat: ["Retro Pocket", "ATmega16A", "Pantalla integrada"],
    size: "30 KB",
    players: "1 jugador",
    release: "Versión 1.0",
  },
  tetris: {
    title: "Tetris",
    genre: "Puzzle",
    difficulty: "Difícil",
    description:
      "Acomoda piezas, completa líneas y evita que la pantalla se llene.",
    longDescription:
      "Tetris es uno de los juegos de puzzle más importantes de la historia. La versión para Retro Pocket conserva la dinámica clásica de acomodo de piezas y eliminación de líneas, ofreciendo una experiencia compacta, desafiante y muy adecuada para una consola retro programable.",
    controls: [
      "Mover izquierda",
      "Mover derecha",
      "Rotar pieza",
      "Bajar pieza",
      "Iniciar",
    ],
    tags: ["Puzzle", "Retro", "Clásico", "1 jugador", "Bloques"],
    compat: ["Retro Pocket", "ATmega16A", "Pantalla integrada"],
    size: "36 KB",
    players: "1 jugador",
    release: "Versión 1.0",
  },
};

function InfoRow({ label, value }) {
  return (
    <div className="grid gap-2 border-b border-slate-200 py-4 md:grid-cols-[220px_1fr]">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <div className="text-sm text-slate-700">{value}</div>
    </div>
  );
}

export default function GameDetail() {
  const { slug } = useParams();
  const game = games[slug];

  const [selectedShot, setSelectedShot] = useState(0);
  const [favorite, setFavorite] = useState(false);

  if (!game) {
    return (
      <main className="w-full">
        <section className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <h1 className="text-3xl font-bold">Juego no encontrado</h1>
        </section>
      </main>
    );
  }

  const thumbnails = ["01", "02", "03", "04", "05"];

  return (
    <main className="w-full">
      <section className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm md:p-6 lg:p-8">
        <div className="rounded-[2rem] bg-white p-4 md:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link
              to="/juegos"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              ← Volver a juegos
            </Link>
            <div className="text-slate-400">
              Inicio / Juegos /{" "}
              <span className="text-slate-600">{game.title}</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#dbeafe,#cbd5e1)] shadow-sm">
                <div className="flex aspect-[16/9] flex-col items-center justify-center text-slate-700">
                  <span className="text-3xl font-bold md:text-4xl">
                    {game.title}
                  </span>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Vista {thumbnails[selectedShot]}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={`${thumb}-${index}`}
                    onClick={() => setSelectedShot(index)}
                    className={`flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl border text-base font-semibold transition ${
                      selectedShot === index
                        ? "border-red-500 bg-red-50"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    Vista {thumb}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {game.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  {game.genre}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  {game.players}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  {game.release}
                </span>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Dificultad
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {game.difficulty}
                    </p>
                  </div>

                  <button
                    onClick={() => setFavorite((prev) => !prev)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      favorite
                        ? "border-red-200 bg-red-50 text-red-600"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {favorite ? "★ Favorito" : "☆ Marcar favorito"}
                  </button>
                </div>

                <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Tamaño del archivo</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {game.size}
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  <button className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600">
                    Cargar a consola
                  </button>

                </div>

                <div className="mt-5 text-sm leading-6 text-slate-600">
                  {game.description}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-slate-200 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Descripción del juego
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                  {game.release}
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-700">
                {game.longDescription}
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#dbeafe,#cbd5e1)]">
              <div className="flex aspect-[16/9] items-center justify-center text-3xl font-bold text-slate-700">
                {game.title}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">
              Etiquetas relacionadas
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">
              Acerca de este producto
            </h2>

            <div className="mt-5 rounded-[1.5rem] border border-slate-200 px-5">
              <InfoRow label="Tamaño del archivo" value={game.size} />
              <InfoRow label="Modo de juego compatible" value={game.players} />
              <InfoRow
                label="Controles"
                value={
                  <div className="flex flex-wrap gap-2">
                    {game.controls.map((control) => (
                      <span
                        key={control}
                        className="rounded-full bg-slate-100 px-3 py-1"
                      >
                        {control}
                      </span>
                    ))}
                  </div>
                }
              />
              <InfoRow label="Género" value={game.genre} />
              <InfoRow
                label="Compatibilidad"
                value={
                  <div className="flex flex-wrap gap-2">
                    {game.compat.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                }
              />
              <InfoRow label="Versión" value={game.release} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
