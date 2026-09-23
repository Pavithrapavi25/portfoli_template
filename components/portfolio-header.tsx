
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

interface PortfolioData {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
  }
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function PortfolioHeader({ data }: { data: PortfolioData }) {
  return (
    <header
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-5 py-6 text-white sm:px-6 md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">

          <nav className="hidden gap-8 text-sm font-medium text-slate-400 md:flex">
            <a
              href="#about"
              className="transition hover:text-emerald-400"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-emerald-400"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition hover:text-emerald-400"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition hover:text-emerald-400"
            >
              Skills
            </a>
          </nav>

          {/* Contact button */}
          <a
            href="tel:+919392959626"
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-400 hover:text-slate-950"
          >
            <Phone size={16} />
            Contact Me
          </a>
        </div>

        {/* Hero */}
        <div className="grid items-center gap-12 py-14 sm:py-16 md:grid-cols-2 md:py-24">

          {/* Left */}
          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
              Hello, I'm
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {data.personal.name}
            </h1>

            <h2 className="mb-6 max-w-2xl text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl md:text-3xl">
              {data.personal.title}
            </h2>

            <p className="mb-9 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {data.personal.tagline}
            </p>

            {/* Main button */}
            <div className="flex">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                View My Projects
              </a>
            </div>

            {/* Mobile number */}
            <div className="mt-7 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Mobile
                </p>

                <a
                  href="tel:+919392959626"
                  className="text-base font-semibold text-slate-200 transition hover:text-emerald-400 sm:text-lg"
                >
                  +91 93929 59626
                </a>
              </div>

            </div>
          </div>

          {/* Developer Card */}
          <div className="flex justify-center md:justify-end">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 rounded-3xl bg-emerald-400/10 blur-2xl" />

              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur sm:p-8">

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-600" />
                  <span className="h-3 w-3 rounded-full bg-slate-600" />
                </div>

                <div className="space-y-4 overflow-x-auto font-mono text-xs sm:text-sm">

                  <p className="whitespace-nowrap text-slate-500">
                    <span className="text-emerald-400">const</span> developer =
                  </p>

                  <p className="pl-4 text-slate-300">
                    {'{'}
                  </p>

                  <p className="pl-7 sm:pl-10">
                    <span className="text-cyan-400">name:</span>{' '}
                    <span className="text-emerald-300">
                      "{data.personal.name}"
                    </span>
                  </p>

                  <p className="pl-7 sm:pl-10">
                    <span className="text-cyan-400">role:</span>{' '}
                    <span className="text-emerald-300">
                      "Software Developer"
                    </span>
                  </p>

                  <p className="pl-7 sm:pl-10">
                    <span className="text-cyan-400">focus:</span>{' '}
                    <span className="text-emerald-300">
                      "Web • AI • Data"
                    </span>
                  </p>

                  <p className="pl-4 text-slate-300">
                    {'}'}
                  </p>

                  <p className="pt-3 text-slate-500">
                    // Building practical solutions 🚀
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-center text-xs text-slate-500 sm:text-left sm:text-sm">
            Software Developer • Web • AI • Data
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">

            {data.social.map((link) => {
              const Icon =
                iconMap[link.icon as keyof typeof iconMap]

              if (!Icon) return null

              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-slate-500 transition hover:-translate-y-1 hover:text-emerald-400"
                >
                  <Icon size={21} />
                </Link>
              )
            })}

          </div>
        </div>

      </div>
    </header>
  )
}
