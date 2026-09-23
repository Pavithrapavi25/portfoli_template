"use client"

import { Trophy, MapPin, CalendarDays, FolderGit2 } from "lucide-react"

interface Hackathon {
  year: string
  name: string
  organization: string
  project: string
  description: string
}

interface HackathonsData {
  hackathons: Hackathon[]
}

export default function PortfolioHackathons({ data }: { data: HackathonsData }) {
  return (
    <section id="hackathons" className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Hackathons
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Hackathon Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Participated in hackathons and built practical technology
            solutions within limited time and real-world problem statements.
          </p>
        </div>

        {/* Hackathon Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.hackathons.map((hackathon) => (
            <article
              key={`${hackathon.year}-${hackathon.name}`}
              className="group rounded-2xl border border-slate-700 bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:bg-slate-800"
            >
              {/* Top Row */}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Trophy size={24} />
                </div>

                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                  {hackathon.year}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white">
                {hackathon.name}
              </h3>

              {/* Organization */}
              <div className="mt-3 flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{hackathon.organization}</span>
              </div>

              {/* Project */}
              <div className="mt-3 flex items-start gap-2 text-sm text-slate-300">
                <FolderGit2
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <span>
                  <span className="font-semibold text-white">Project:</span>{" "}
                  {hackathon.project}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 leading-7 text-slate-400">
                {hackathon.description}
              </p>

              {/* Participation Badge */}
              <div className="mt-6 flex items-center gap-2 border-t border-slate-700 pt-4 text-sm text-slate-400">
                <CalendarDays size={16} className="text-emerald-400" />
                <span>Hackathon Participant</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}