import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface FooterData {
  personal: {
    name: string
    email: string
  }
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

export default function PortfolioFooter({ data }: { data: FooterData }) {
  const github = data.social.find(
    (social) => social.icon.toLowerCase() === "github"
  )

  const linkedin = data.social.find(
    (social) => social.icon.toLowerCase() === "linkedin"
  )

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 px-6 py-20 md:px-12 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Contact heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Let's connect
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Get In Touch
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-emerald-400" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to software development, full-stack, data, and AI
            opportunities. Feel free to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {/* Email */}
          <a
            href={`mailto:${data.personal.email}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
              <Mail size={22} />
            </div>

            <h3 className="mb-2 font-semibold text-white">Email</h3>

            <p className="break-all text-sm text-slate-400 group-hover:text-emerald-400">
              {data.personal.email}
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919392959626"
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
              <Phone size={22} />
            </div>

            <h3 className="mb-2 font-semibold text-white">Phone</h3>

            <p className="text-sm text-slate-400 group-hover:text-emerald-400">
              +91 XXXXXXXXXX
            </p>
          </a>

          {/* LinkedIn */}
          {linkedin && (
            <Link
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Linkedin size={22} />
              </div>

              <h3 className="mb-2 font-semibold text-white">LinkedIn</h3>

              <p className="text-sm text-slate-400 group-hover:text-emerald-400">
                Connect with me
              </p>
            </Link>
          )}
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-4">
          {github && (
            <Link
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              <Github size={19} />
            </Link>
          )}

          {linkedin && (
            <Link
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              <Linkedin size={19} />
            </Link>
          )}

          <a
            href={`mailto:${data.personal.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © 2026 {data.personal.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-400"
          >
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}