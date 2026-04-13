import Navbar from "./components/Navbar";
import MiniConsole from "./components/MiniConsole";
import GamesPanel from "./components/GamesPanel";
import FeaturedGame from "./components/FeatureGame";
import ProjectInfo from "./components/ProjectInfo";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#1f2a44_0%,#0b1020_45%,#050814_100%)] px-6 py-8 text-white md:px-10 lg:px-14">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <header className="mb-8 grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden md:block" aria-hidden="true" />

          <div className="flex items-center justify-center gap-3 text-center">
            <span className="text-2xl">🕹️</span>
            <div>
              <p className="text-xl font-bold tracking-wide text-white">
                Retro Pocket
              </p>
            </div>
          </div>

          <Navbar />
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-[2.5rem] border border-white/10 bg-white/4 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm lg:p-8">

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex min-h-90 items-center justify-center rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8">
                <MiniConsole />
              </div>
              <div className="pt-12">
                <GamesPanel />
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <FeaturedGame />
              <ProjectInfo />
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}
