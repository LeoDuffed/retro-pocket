export default function Info() {
  const hardware = [
    "ATmega16A / ATmega32 como cerebro de la consola",
    "Pantalla Nokia 5110 PCD8544 de 84x48 px",
    "Botones físicos para controlar los juegos",
    "Comunicación UART mediante adaptador USB-TTL CH340",
    "Servidor local en la computadora para cargar juegos",
  ];

  const flow = [
    {
      title: "1. La página web",
      text: "Desde la interfaz se elige un juego disponible, como Snake, Dodge, Pong o Flapy.",
    },
    {
      title: "2. Servidor local",
      text: "La página se comunica con un servidor en la computadora, hecho con Node.js y Express.",
    },
    {
      title: "3. Carga por UART",
      text: "El servidor ejecuta avrdude y manda el archivo del juego al microcontrolador usando el puerto serial.",
    },
    {
      title: "4. Bootloader",
      text: "El bootloader recibe el programa nuevo y lo graba en la memoria del microcontrolador.",
    },
    {
      title: "5. Juego en consola",
      text: "Después de cargarlo, la consola ejecuta el juego directamente desde el ATmega.",
    },
  ];

  return (
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-red-400">
            Proyecto
          </p>

          <h1 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Retro Pocket
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            Retro Pocket es una consola retro programable basada en un
            microcontrolador ATmega. El objetivo del proyecto es poder jugar
            minijuegos clásicos en una pantalla pequeña y, además, cargarlos
            desde una página web mediante comunicación UART.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-red-300">
              ¿Qué es la consola?
            </h2>

            <p className="mb-6 leading-7 text-slate-300">
              Es una consola portátil de estilo retro construida con hardware
              embebido. En lugar de usar una computadora completa, utiliza un
              microcontrolador que controla la pantalla, lee los botones y
              ejecuta juegos sencillos escritos en C para AVR.
            </p>

            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                Idea principal
              </p>

              <p className="text-xl font-semibold text-white">
                Una página web selecciona el juego, el servidor local lo carga
                por UART y el ATmega lo ejecuta en la consola.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-red-300">
              Componentes principales
            </h2>

            <ul className="space-y-4">
              {hardware.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-900/80 p-4 text-slate-300"
                >
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <h2 className="mb-8 text-center text-3xl font-black">
            ¿Cómo funciona la carga de juegos?
          </h2>

          <div className="grid gap-5 md:grid-cols-5">
            {flow.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-5"
              >
                <h3 className="mb-3 text-lg font-bold text-red-300">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-xl font-bold text-red-300">
              Interfaz web
            </h2>
            <p className="leading-7 text-slate-300">
              La página permite ver los juegos disponibles y seleccionar cuál se
              quiere mandar a la consola. Funciona como una biblioteca visual de
              minijuegos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-xl font-bold text-red-300">
              Servidor local
            </h2>
            <p className="leading-7 text-slate-300">
              El servidor actúa como puente entre la página y el hardware. La
              web no puede usar directamente avrdude, por eso el servidor recibe
              la petición y ejecuta la carga.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-xl font-bold text-red-300">Bootloader</h2>
            <p className="leading-7 text-slate-300">
              El bootloader es un pequeño programa que vive dentro del ATmega.
              Su trabajo es recibir el juego nuevo por UART y escribirlo en la
              memoria del microcontrolador.
            </p>
          </div>
        </div>
      </div>
  );
}
/*
        <div className="mt-12 rounded-3xl bg-cyan-900 p-8 text-center text-slate-950 shadow-2xl">
          <h2 className="mb-3 text-3xl font-black">
            Una consola retro, pero programable
          </h2>

          <p className="mx-auto max-w-3xl text-lg font-medium">
            Retro Pocket combina electrónica, programación embebida, diseño web
            y comunicación serial para crear una consola capaz de recibir nuevos
            juegos desde una interfaz moderna.
          </p>
        </div>
*/