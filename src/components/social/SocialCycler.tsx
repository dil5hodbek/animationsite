"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate as animateValue } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { socials } from "@/lib/socials";
import GlowPlatform from "./GlowPlatform";
import GlassIcon from "./GlassIcon";

const ITEM_WIDTH = 124; // px per icon slot in the track
const SECONDS_PER_ITEM = 3.4; // ambient drift speed
const RESUME_DELAY_MS = 1500; // pause after a manual arrow tap before drifting again
// Tablet/desktop window is fixed to 744px = ITEM_WIDTH(124) * 6 icons visible.
// (Kept safely under the 768px `md` breakpoint so it never overflows.)

function MarqueeItem({ social }: { social: (typeof socials)[number] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = social.icon;

  return (
    <div
      className="relative flex shrink-0 flex-col items-center justify-end"
      style={{ width: ITEM_WIDTH, height: 168 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GlowPlatform color={social.color} glow={social.glow} hovered={hovered} />

      <motion.div
        className="relative z-10 mb-[46px]"
        animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
      >
        <GlassIcon Icon={Icon} color={social.color} glow={social.glow} hovered={hovered} size={60} />
      </motion.div>

      <p
        className="mt-1 text-xs font-medium"
        style={{ color: hovered ? social.color : undefined }}
      >
        {social.name}
      </p>

      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className="absolute inset-0 bottom-6"
      />
    </div>
  );
}

export default function SocialCycler() {
  // triple the list so manual +/-1 steps always have a neighbour to reveal
  const track = [...socials, ...socials, ...socials];
  const bandWidth = ITEM_WIDTH * socials.length;

  const x = useMotionValue(-bandWidth);
  const activeAnim = useRef<ReturnType<typeof animateValue> | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    function drift(from: number) {
      activeAnim.current = animateValue(x, from - bandWidth, {
        duration: SECONDS_PER_ITEM * socials.length,
        ease: "linear",
        onComplete: () => {
          x.set(from); // snap back a full band, seamlessly, and keep going
          drift(from);
        },
      });
    }

    drift(normalize(x.get()));
    return () => activeAnim.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // Keeps x inside the safe middle band [-2*bandWidth, 0]. Since the track
  // is three identical copies back to back, snapping by exactly one
  // bandWidth lands on pixel-identical content — completely invisible.
  function normalize(value: number) {
    let v = value;
    while (v <= -2 * bandWidth) v += bandWidth;
    while (v >= 0) v -= bandWidth;
    return v;
  }

  function step(direction: 1 | -1) {
    activeAnim.current?.stop();
    setPaused(true);
    const current = normalize(x.get());
    x.set(current);
    activeAnim.current = animateValue(x, current - direction * ITEM_WIDTH, {
      type: "spring",
      stiffness: 260,
      damping: 26,
      onComplete: () => {
        window.setTimeout(() => setPaused(false), RESUME_DELAY_MS);
      },
    });
  }

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2 md:left-auto md:w-[744px] md:translate-x-0">
      <div
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
        }}
      >
        <motion.div className="flex w-max items-end" style={{ x }}>
          {track.map((s, i) => (
            <MarqueeItem key={`${s.name}-${i}`} social={s} />
          ))}
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => step(-1)}
        className="glass absolute left-2 top-[64px] z-10 flex h-8 w-8 items-center justify-center rounded-full active:scale-90"
      >
        <FiChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => step(1)}
        className="glass absolute right-2 top-[64px] z-10 flex h-8 w-8 items-center justify-center rounded-full active:scale-90"
      >
        <FiChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
