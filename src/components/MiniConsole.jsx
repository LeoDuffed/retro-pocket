export default function MiniConsole() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
      <div className="absolute inset-x-10 top-8 h-28 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="animate-[float_3.8s_ease-in-out_infinite] rounded-[2.5rem] border border-white/15 bg-black/40 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
        <div className="w-72.5 rounded-4xl bg-[#cfd4dc] p-4 shadow-inner">
          <div className="mb-4 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-xs font-semibold tracking-wide text-slate-600">
                RETRO POCKET
              </span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              ATmega16A
            </span>
          </div>

          <div className="rounded-3xl border-4 border-[#5f6877] bg-[#a8d5c2] p-3">
            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-[#87c0a8]">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)] bg-size-[100%_8px] opacity-50" />

              <div className="grid grid-cols-6 gap-1 opacity-80">
                {Array.from({ length: 24 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-4 w-4 rounded-[3px] ${
                      index % 5 === 0 || index % 7 === 0
                        ? "bg-[#214e34] animate-pulse"
                        : "bg-[#5f8f6d]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between px-2">
            <div className="grid grid-cols-3 gap-1">
              <div />
              <div className="h-8 w-8 rounded-md bg-[#5f6877] shadow" />
              <div />
              <div className="h-8 w-8 rounded-md bg-[#5f6877] shadow" />
              <div className="h-8 w-8 rounded-md bg-[#4c5564] shadow" />
              <div className="h-8 w-8 rounded-md bg-[#5f6877] shadow" />
              <div />
              <div className="h-8 w-8 rounded-md bg-[#5f6877] shadow" />
              <div />
            </div>

            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-full bg-rose-500 shadow-lg" />
              <div className="h-11 w-11 rounded-full bg-amber-400 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}