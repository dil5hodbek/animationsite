"use client";

import { motion } from "framer-motion";
import { socials } from "@/lib/socials";
import SocialCard from "./SocialCard";

export default function SocialDock() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      {/* faint background aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/10 blur-[140px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse-glow" />
          Let&apos;s Connect
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl font-semibold sm:text-5xl"
        >
          Find me across the web
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-md text-sm text-muted sm:text-base"
        >
          Always open to discussing new projects, creative ideas, or opportunities.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-x-2 gap-y-10 xs:gap-x-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-14">
          {socials.map((s, i) => (
            <SocialCard key={s.name} social={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
