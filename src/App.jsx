import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Juegos from "./pages/Juegos";
import Info from "./pages/Info";
import GameDetail from "./pages/GameDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="juegos" element={<Juegos />} />
        <Route path="juegos/:slug" element={<GameDetail />} />
        <Route path="info" element={<Info />} />
      </Route>
    </Routes>
  );
}