"use client"

import Image from "next/image"
import { useState } from "react"
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  link: string
  liveLink?: string
  featured: boolean
}

interface ProjectsData {
  projects: Project[]
}

export default function PortfolioProjects({
  data,
}: {
  data: ProjectsData
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const featuredProjects = data.projects.filter(
    (project) => project.featured
  )

  const otherProjects = data.projects.filter(
    (project) => !project.featured
  )

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 md:px-12 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            My work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-emerald-400" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A collection of software development, AI, data science,
            machine learning, and web development projects.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">
                Featured Projects
              </h3>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                {featuredProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/5"
                >
                  {/* Image */}
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="block w-full text-left"
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                      <div className="absolute left-5 top-5">
                        <span className="rounded-full bg-emerald-400 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-lg">
                          ★ Featured
                        </span>
                      </div>

                      <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-7">
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="text-left"
                    >
                      <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-emerald-400">
                        {project.title}
                      </h3>
                    </button>

                    <p className="mb-6 leading-7 text-slate-400">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:gap-3 hover:text-emerald-300"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">
                Other Projects
              </h3>

              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
                {otherProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
                >
                  {/* Image */}
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="block w-full text-left"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-6">
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="w-full text-left"
                    >
                      <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                        {project.title}
                      </h3>
                    </button>

                    <p className="mb-5 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:gap-3"
                    >
                      View Details
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeProject}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/90 text-slate-300 transition hover:bg-emerald-400 hover:text-slate-950"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 md:h-72">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {selectedProject.featured && (
                <span className="mb-4 inline-block rounded-full bg-emerald-400 px-3 py-1.5 text-xs font-bold text-slate-950">
                  ★ Featured Project
                </span>
              )}

              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                {selectedProject.title}
              </h2>

              <p className="mb-7 leading-8 text-slate-300">
                {selectedProject.longDescription ||
                  selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-sm text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-emerald-300"
                  >
                    <Github size={18} />
                    GitHub
                    <ExternalLink size={15} />
                  </a>
                )}

                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-400 px-5 py-3 font-bold text-emerald-400 transition hover:bg-emerald-400 hover:text-slate-950"
                  >
                    <ExternalLink size={18} />
                    Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}