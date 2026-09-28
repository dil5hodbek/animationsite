"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet animate-pulse-glow" />
              Featured Projects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl font-semibold sm:text-5xl"
            >
              Things I&apos;ve built
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div>
                <span className="text-xs font-mono text-muted">{p.index}</span>
                <h3 className="mt-3 text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 flex items-center gap-1 text-sm font-medium text-accent-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Project →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
