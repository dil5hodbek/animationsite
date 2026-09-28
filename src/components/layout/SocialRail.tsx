"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "@/lib/socials";

export default function SocialRail() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.8 },
        x: { duration: 0.6, delay: 0.8 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
      }}
      className="glass fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-full px-2.5 py-4 2xl:flex"
    >
      {socials.map((s) => {
        const Icon = s.icon;
        const isHovered = hovered === s.name;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            onMouseEnter={() => setHovered(s.name)}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex h-9 w-9 items-center justify-center"
          >
            <motion.span
              animate={{
                scale: isHovered ? 1.3 : 1,
                color: isHovered ? s.color : "#c7cad6",
              }}
              transition={{ type: "spring", stiffness: 320, damping: 14 }}
              className="relative z-10 flex"
            >
              <Icon className="h-4 w-4" />
            </motion.span>

            {/* glow behind icon on hover */}
            <motion.span
              className="absolute inset-0 rounded-full blur-md"
              style={{ background: s.glow }}
              animate={{ opacity: isHovered ? 0.9 : 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* tooltip label sliding out to the right */}
            <motion.span
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -8,
                pointerEvents: isHovered ? "auto" : "none",
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="glass pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ color: isHovered ? s.color : undefined }}
            >
              {s.name}
            </motion.span>
          </a>
        );
      })}
    </motion.div>
  );
}
