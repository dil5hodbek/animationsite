"use client";

import { motion } from "framer-motion";

export default function EnergyRing({
  color,
  glow,
  size,
  squash,
  duration,
  reverse = false,
  pulse = false,
  thickness = 8,
}: {
  color: string;
  glow: string;
  size: number;
  squash: number;
  duration: number;
  reverse?: boolean;
  pulse?: boolean;
  thickness?: number;
}) {
  const outerEdge = 100;
  const innerEdge = 100 - thickness;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: size,
        height: size,
        x: "-50%",
        y: "-50%",
        scaleY: squash,
      }}
      animate={pulse ? { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] } : undefined}
      transition={pulse ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {/* base ring track, always visible */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `1.5px solid ${color}55`, boxShadow: `0 0 10px ${glow}` }}
      />

      {/* traveling energy glint along the ring */}
      <motion.div
        className="h-full w-full rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${color} 45deg, transparent 110deg, transparent 360deg)`,
          WebkitMaskImage: `radial-gradient(circle closest-side, transparent ${innerEdge - 4}%, black ${innerEdge}%, black ${outerEdge - 2}%, transparent ${outerEdge}%)`,
          maskImage: `radial-gradient(circle closest-side, transparent ${innerEdge - 4}%, black ${innerEdge}%, black ${outerEdge - 2}%, transparent ${outerEdge}%)`,
          filter: `drop-shadow(0 0 4px ${color})`,
        }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
