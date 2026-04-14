import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#1f2a44_0%,#0b1020_45%,#050814_100%)] px-3 py-8 text-white md:px-6 lg:px-14">
      <div className="mx-auto max-w-7xl">
        
        <header className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:gap-105 pl-8">
          <div className="flex items-center gap-3 pl-8">
            <span className="text-2xl text-cyan-200">RP</span>
            <p className="text-2xl font-bold tracking-wide text-white ">
              Retro Pocket
            </p>
          </div>

          <Navbar />
        </header>

        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
