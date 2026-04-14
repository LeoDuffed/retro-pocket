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
      `}</style>

      <main className="grid gap-6">
        <section className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm lg:p-8">
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0f172a]/80 p-5">

              <div className="flex min-h-[360px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                <MiniConsole />
              </div>
            </div>

            <GamesPanel />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FeaturedGame />
            <ProjectInfo />
          </div>
        </section>
      </main>
    </>
  );
}