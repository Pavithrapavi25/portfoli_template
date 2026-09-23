
interface ExperienceData {
  experience: Array<{
    year: string
    role: string
    company: string
    description: string
    skills: string[]
  }>
}

export default function PortfolioExperience({
  data,
}: {
  data: ExperienceData
}) {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-900 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Career journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Experience
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-700 md:block" />

          <div className="space-y-8">

            {data.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-emerald-400 shadow-lg shadow-emerald-400/20 md:flex" />

                {/* Experience Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-black/20 md:p-8">

                  <div className="grid gap-6 md:grid-cols-[180px_1fr]">

                    {/* Year */}
                    <div>
                      <span className="inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm font-bold text-emerald-400">
                        {exp.year}
                      </span>
                    </div>

                    {/* Details */}
                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="mt-2 text-base font-semibold text-emerald-400">
                        {exp.company}
                      </p>

                      <p className="mt-5 leading-8 text-slate-400">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.skills.map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
