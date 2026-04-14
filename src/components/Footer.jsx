import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const icons = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaTiktok />, link: "#" },
  { icon: <FaWhatsapp />, link: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-12 rounded-[2.5rem] border border-white/10 bg-black/80 py-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md md:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="flex flex-wrap justify-center gap-12 md:justify-between">
            <div className="flex min-w-45 flex-col gap-2 text-left">
              <h2 className="mb-3 text-lg font-bold text-white">
                Sobre Nosotros
              </h2>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Cómo funciona
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Testimonios
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Carreras
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Términos del servicio
              </a>
            </div>

            <div className="flex min-w-45 flex-col gap-2 text-left">
              <h2 className="mb-3 text-lg font-bold text-white">Contáctanos</h2>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Contacto
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Soporte
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Destinos
              </a>
            </div>

            <div className="flex min-w-45 flex-col gap-2 text-left">
              <h2 className="mb-3 text-lg font-bold text-white">Videos</h2>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Enviar video
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Embajadores
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Agencia
              </a>
            </div>

            <div className="flex min-w-45 flex-col gap-2 text-left">
              <h2 className="mb-3 text-lg font-bold text-white">
                Redes Sociales
              </h2>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Instagram
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Facebook
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                YouTube
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-cyan-300">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full border-t border-white/10 pt-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
            <Link to="/" className="text-3xl font-bold text-white">
              Retro Pocket
            </Link>
            <p className="text-sm text-white/70">
              © Retro Pocket {year}. Todos los derechos reservados
            </p>
            <div className="flex gap-4">
              {icons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
