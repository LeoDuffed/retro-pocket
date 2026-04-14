import MiniConsole from "../components/MiniConsole";
import GamesPanel from "../components/GamesPanel";
import FeaturedGame from "../components/FeatureGame";
import ProjectInfo from "../components/ProjectInfo";

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .liquid-panel {
          position: relative;
          border-radius: 2.5rem;
          background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.18),
              rgba(255, 255, 255, 0.05)
            );
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 30px 80px rgba(3, 7, 18, 0.55);
          backdrop-filter: blur(22px) saturate(160%);
          overflow: hidden;
        }

        .liquid-panel::before {
          content: "";
          position: absolute;
          inset: -30% -10% 45% -10%;
          background:
            radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.45), transparent 45%),
            radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.35), transparent 55%);
          opacity: 0.75;
          pointer-events: none;
        }

        .liquid-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.45),
            rgba(255, 255, 255, 0.08) 35%,
            rgba(255, 255, 255, 0) 60%
          );
          opacity: 0.4;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .liquid-card {
          position: relative;
          border-radius: 2rem;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.18),
            rgba(255, 255, 255, 0.05)
          );
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(16px) saturate(150%);
          overflow: hidden;
        }

        .liquid-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.35),
            rgba(255, 255, 255, 0) 55%
          );
          opacity: 0.2;
          pointer-events: none;
        }

        .liquid-tile {
          position: relative;
          background: linear-gradient(
            140deg,
            rgba(255, 255, 255, 0.22),
            rgba(255, 255, 255, 0.06)
          );
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(12px) saturate(140%);
          overflow: hidden;
        }

        .liquid-tile::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.45),
            rgba(255, 255, 255, 0) 55%
          );
          opacity: 0.18;
          pointer-events: none;
        }

        .liquid-button {
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px) saturate(140%);
        }
      `}</style>

      <main className="grid gap-6">
        <section className="liquid-panel p-6 lg:p-8">
          <div className="pointer-events-none absolute -top-24 right-6 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-6 left-8 h-40 w-40 rounded-full bg-fuchsia-400/15 blur-3xl" />

          <div className="relative z-10 grid gap-6 md:grid-cols-2">
            <div className="liquid-card flex items-center justify-center p-8">
              <MiniConsole />
            </div>

            <GamesPanel />
          </div>

          <div className="relative z-10 mt-6 grid gap-6 md:grid-cols-2">
            <FeaturedGame />
            <ProjectInfo />
          </div>
        </section>
      </main>
    </>
  );
}
