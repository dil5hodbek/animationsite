"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RoleCycler from "./RoleCycler";

const infoCards = [
  {
    label: "Building",
    value: "AI Parking System",
    hint: "Solving real-world parking problems",
    dot: "bg-accent-violet",
  },
  {
    label: "Location",
    value: "Uzbekistan",
    hint: "Open for remote opportunities",
    dot: "bg-accent-cyan",
  },
  {
    label: "Available",
    value: "Freelance & Full-time",
    hint: "Let's build something great together",
    dot: "bg-emerald-400",
  },
];

function Portrait() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {/* Always-visible placeholder background. Drop your real photo at
          /public/hero-portrait.jpg — it layers on top once it loads. */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.35),transparent_60%)] text-center">
        <span className="text-gradient text-7xl font-bold">D</span>
        <p className="max-w-[200px] text-xs text-muted">
          Add your photo at <code className="text-foreground">/public/hero-portrait.jpg</code>
        </p>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-portrait.jpg"
        alt="Dilshodbek"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden pt-28"
    >
      {/* ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-accent-violet/20 blur-[130px]" />
        <div className="absolute -right-20 top-1/3 h-[380px] w-[380px] rounded-full bg-accent-cyan/10 blur-[130px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left: copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            Building the future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building software
            <br />
            people{" "}
            <span className="text-gradient">remember.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base text-muted sm:text-lg"
          >
            Economist by degree, engineer by habit. I design and build digital
            products that solve real problems and create real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 flex items-center gap-2 text-sm text-muted"
          >
            <RoleCycler />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-black"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </span>
            </a>
            <a
              href="#journey"
              className="glass rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
            >
              Let&apos;s Build Together
            </a>
          </motion.div>
        </div>

        {/* right: portrait bleeding out of layout + floating cards */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] lg:w-[108%] lg:max-w-none"
            style={{
              boxShadow:
                "0 40px 100px -30px rgba(124,58,237,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <Portrait />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          {/* floating info cards */}
          <div className="pointer-events-none absolute -left-6 top-6 hidden flex-col gap-3 lg:-left-24 lg:flex xl:-left-32">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass animate-float pointer-events-auto w-56 rounded-2xl p-4"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.dot}`} />
                  {card.label}
                </div>
                <p className="mt-1 text-sm font-medium">{card.value}</p>
                <p className="mt-0.5 text-xs text-muted">{card.hint}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-muted"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
          />
        </div>
        Scroll to explore
      </motion.a>
    </section>
  );
}
