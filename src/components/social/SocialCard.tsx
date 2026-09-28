"use client";

import { motion } from "framer-motion";
import type { SocialLink } from "@/lib/socials";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { useFloating } from "@/hooks/useFloating";
import GlowPlatform from "./GlowPlatform";
import GlassIcon from "./GlassIcon";

export default function SocialCard({
  social,
  index,
}: {
  social: SocialLink;
  index: number;
}) {
  const { ref, hovered, rotateX, rotateY, magnetX, handlers } =
    useMouseTilt<HTMLAnchorElement>();
  const floating = useFloating(index * 0.25);
  const Icon = social.icon;

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      {...handlers}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center gap-3 outline-none"
      style={{ perspective: 700 }}
    >
      {/* stage: icon + light beam + holographic platform */}
      <div className="relative flex h-[176px] w-[150px] origin-bottom flex-col items-center justify-end max-[380px]:scale-[0.82]">
        <GlowPlatform color={social.color} glow={social.glow} hovered={hovered} />

        {/* vertical energy beam connecting icon to platform */}
        <motion.div
          className="absolute bottom-[26px] left-1/2 w-[3px] -translate-x-1/2 rounded-full blur-[2px]"
          style={{
            height: 48,
            background: `linear-gradient(to top, ${social.color}, transparent)`,
          }}
          animate={{ opacity: hovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.3 }}
        />

        {/* idle floating layer */}
        <motion.div
          className="relative z-10 mb-[60px]"
          animate={floating.animate}
          transition={floating.transition}
        >
          {/* mouse-tilt + magnet + hover-lift layer */}
          <motion.div
            style={{
              x: magnetX,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            animate={{ y: hovered ? -20 : 0, scale: hovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 16 }}
          >
            <GlassIcon Icon={Icon} color={social.color} glow={social.glow} hovered={hovered} />
          </motion.div>
        </motion.div>
      </div>

      <div className="text-center">
        <p
          className="text-sm font-medium transition-colors"
          style={{ color: hovered ? social.color : "var(--foreground)" }}
        >
          {social.name}
        </p>
        <p className="text-xs text-muted">{social.subtitle}</p>
      </div>
    </motion.a>
  );
}
