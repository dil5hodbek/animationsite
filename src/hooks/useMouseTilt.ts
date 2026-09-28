"use client";

import { useRef, useState, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const TILT_RANGE = 16;
const MAGNET_RADIUS = 70;
const MAGNET_STRENGTH = 0.28;
const SPRING = { stiffness: 260, damping: 20, mass: 0.5 };

export function useMouseTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const magnetX = useMotionValue(0);

  const springRotateX = useSpring(rotateX, SPRING);
  const springRotateY = useSpring(rotateY, SPRING);
  const springMagnetX = useSpring(magnetX, SPRING);

  function onMouseMove(e: MouseEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    const px = dx / (rect.width / 2);
    const py = dy / (rect.height / 2);
    rotateY.set(Math.max(-1, Math.min(1, px)) * TILT_RANGE);
    rotateX.set(Math.max(-1, Math.min(1, -py)) * TILT_RANGE);

    const dist = Math.sqrt(dx * dx + dy * dy);
    magnetX.set(dist < MAGNET_RADIUS ? dx * MAGNET_STRENGTH : 0);
  }

  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    magnetX.set(0);
  }

  return {
    ref,
    hovered,
    rotateX: springRotateX,
    rotateY: springRotateY,
    magnetX: springMagnetX,
    handlers: { onMouseMove, onMouseEnter, onMouseLeave },
  };
}
