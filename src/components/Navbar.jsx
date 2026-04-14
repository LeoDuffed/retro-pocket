import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Juegos", to: "/juegos" },
  { label: "Informacion", to: "/info" },
];

export default function Navbar() {
  return (
    <div className="flex justify-start">
      <nav className="flex items-center gap-12 rounded-full border border-white/15 bg-white/10 px-12 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `text-base font-medium transition ${
                isActive ? "text-cyan-300" : "text-white/85 hover:text-cyan-300"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
