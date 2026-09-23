interface AboutData {
  about: string[]
  personal: {
    currentRole: string
    currentRoleDescription: string
  }
}

export default function PortfolioAbout({ data }: { data: AboutData }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 px-6 py-20 md:px-12 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            About Me
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* About content */}
          <div className="space-y-6 lg:col-span-2">
            {data.about.map((section, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 transition duration-300 hover:border-emerald-400/30"
              >
                <p className="text-base leading-8 text-slate-300 md:text-lg">
                  {section}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Current role */}
            <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-slate-800 to-slate-950 p-7 shadow-xl shadow-black/10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                  <span className="text-lg text-emerald-400">💼</span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                  Current Role
                </p>
              </div>

              <h3 className="mb-4 text-xl font-bold text-white">
                {data.personal.currentRole}
              </h3>

              <p className="text-sm leading-7 text-slate-400">
                {data.personal.currentRoleDescription}
              </p>
            </div>

            {/* Focus cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center transition hover:-translate-y-1 hover:border-emerald-400/40">
                <div className="mb-2 text-xl">💻</div>
                <p className="text-xs font-semibold text-slate-300">
                  Full Stack
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center transition hover:-translate-y-1 hover:border-emerald-400/40">
                <div className="mb-2 text-xl">🤖</div>
                <p className="text-xs font-semibold text-slate-300">
                  AI & Data
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center transition hover:-translate-y-1 hover:border-emerald-400/40">
                <div className="mb-2 text-xl">🌐</div>
                <p className="text-xs font-semibold text-slate-300">
                  Web Dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}