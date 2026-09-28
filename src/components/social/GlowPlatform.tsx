"use client";

import { motion } from "framer-motion";
import EnergyRing from "./EnergyRing";
import FloatingParticles from "./FloatingParticles";

export default function GlowPlatform({
  color,
  glow,
  hovered,
}: {
  color: string;
  glow: string;
  hovered: boolean;
}) {
  return (
    <div className="absolute bottom-2 left-1/2 h-[54px] w-[150px] -translate-x-1/2">
      {/* ambient volumetric glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-9 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg"
        style={{ background: glow }}
        animate={{ opacity: hovered ? 0.6 : 0.24, scale: hovered ? 1.3 : 1 }}
        transition={{ duration: 0.4 }}
      />

      <FloatingParticles color={color} />

      {/* outer ring — slow clockwise */}
      <EnergyRing
        color={color}
        glow={glow}
        size={150}
        squash={0.38}
        duration={hovered ? 3.4 : 9}
        thickness={5}
      />
      {/* middle ring — counter-clockwise */}
      <EnergyRing
        color={color}
        glow={glow}
        size={112}
        squash={0.38}
        duration={hovered ? 4.2 : 11}
        thickness={6}
        reverse
      />
      {/* inner ring — pulses every 2s */}
      <EnergyRing
        color={color}
        glow={glow}
        size={78}
        squash={0.38}
        duration={hovered ? 2.6 : 6}
        thickness={8}
        pulse
      />

      {/* bright energy core */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: color, boxShadow: `0 0 12px 4px ${glow}` }}
        animate={{ opacity: hovered ? 1 : 0.7, scale: hovered ? 1.4 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
