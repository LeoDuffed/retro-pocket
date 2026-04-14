import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-stone-400 px-3 py-8 text-white md:px-6 lg:px-14">
      <div className="mx-auto max-w-7xl">
        
        <header className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:gap-105 pl-8">
          <div className="flex items-center gap-3 pl-8">
            <span className="text-3xl">🕹️</span>
            <p className="text-3xl font-bold tracking-wide text-white ">
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
