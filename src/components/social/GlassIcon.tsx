"use client";

import type { IconType } from "react-icons";
import styles from "./social.module.css";

export default function GlassIcon({
  Icon,
  color,
  glow,
  hovered,
  size = 84,
}: {
  Icon: IconType;
  color: string;
  glow: string;
  hovered: boolean;
  size?: number;
}) {
  const radius = Math.round(size * 0.32);

  return (
    <div
      className={styles.glassIcon}
      style={
        {
          width: size,
          height: size,
          borderRadius: radius,
          borderColor: hovered ? color : "rgba(255,255,255,0.16)",
          boxShadow: hovered
            ? `0 18px 40px -10px ${glow}, 0 1px 0 rgba(255,255,255,0.35) inset, 0 -10px 20px -10px ${glow} inset`
            : "0 8px 24px -12px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.14) inset, 0 -8px 16px -10px rgba(0,0,0,0.4) inset",
        } as React.CSSProperties
      }
    >
      <span
        className={`${styles.edgeShimmer} ${hovered ? styles.edgeShimmerHovered : ""}`}
        style={{ "--shimmer": color, borderRadius: radius } as React.CSSProperties}
      />
      <span className={styles.glossStreak} />
      <span
        className={styles.bottomReflection}
        style={{ "--tint": glow } as React.CSSProperties}
      />
      <Icon
        className={styles.iconGlyph}
        style={{
          color: hovered ? color : "#f1f2fa",
          filter: hovered ? `drop-shadow(0 0 10px ${glow})` : "none",
        }}
      />
    </div>
  );
}
