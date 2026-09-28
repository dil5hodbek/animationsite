"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function OrbitSpark({
  color,
  radius,
  duration,
  squash,
  reverse = false,
}: {
  color: string;
  radius: number;
  duration: number;
  squash: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0, transform: `scaleY(${squash})` }}
    >
      <motion.div
        className="absolute left-0 top-0"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute rounded-full"
          style={{
            left: radius,
            top: -1.5,
            width: 3,
            height: 3,
            background: color,
            boxShadow: `0 0 6px ${color}`,
          }}
        />
      </motion.div>
    </div>
  );
}

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

export default function FloatingParticles({
  color,
  count = 8,
}: {
  color: string;
  count?: number;
}) {
  // Randomized client-side only (after mount) so server/client markup
  // stays identical and React doesn't flag a hydration mismatch.
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: Math.random() * 1.6 + 0.8,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2.5,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute -inset-y-8 inset-x-0 overflow-visible">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: color,
            boxShadow: `0 0 4px ${color}`,
          }}
          animate={{ opacity: [0.1, 0.85, 0.1], scale: [0.7, 1.2, 0.7] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}

      <OrbitSpark color={color} radius={64} duration={7} squash={0.4} />
      <OrbitSpark color={color} radius={50} duration={5.5} squash={0.45} reverse />
    </div>
  );
}
