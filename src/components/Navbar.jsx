import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Juegos", to: "/juegos" },
  { label: "Informacion", to: "/info" },
];

export default function Navbar() {
  return (
    <div className="flex justify-start">
      <nav className="liquid-nav flex items-center gap-12 rounded-full px-12 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `text-base font-medium transition ${
                isActive ? "text-cyan-200" : "text-white/80 hover:text-cyan-200"
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
