interface SkillsData {
  skills: {
    [category: string]: string[]
  }
}

export default function PortfolioSkills({ data }: { data: SkillsData }) {
  const skillGroups = Object.entries(data.skills)

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 md:px-12 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            My toolkit
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Skills & Technologies
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-emerald-400" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Technologies and tools I use to build web applications,
            data-driven solutions, and AI-powered projects.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(([category, items]) => (
            <div
              key={category}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Category */}
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

                <h3 className="text-lg font-bold text-white">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-emerald-400/50 hover:text-emerald-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}