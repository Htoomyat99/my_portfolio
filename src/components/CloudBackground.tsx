/* eslint-disable react-hooks/purity */
import type { CloudProps } from "@/type";
import { useMemo } from "react";

function Cloud({ top, size, duration, opacity }: CloudProps) {
  const delay = useMemo(
    () => `-${Math.random() * parseFloat(duration)}s`,
    [duration]
  );

  return (
    <img
      src="/cloud.png"
      alt="cloud"
      className={`absolute animate-cloud ${opacity} select-none`}
      style={{
        top,
        left: "-30vw",
        width: size,
        animationDuration: duration,
        animationDelay: delay,
      }}
      draggable={false}
    />
  );
}

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-linear-to-b from-sky-500/80 to-sky-100">
      <Cloud top="15%" size={180} duration="28s" opacity="opacity-70" />
      <Cloud top="30%" size={260} duration="34s" opacity="opacity-60" />
      <Cloud top="15%" size={220} duration="30s" opacity="opacity-50" />
      <Cloud top="65%" size={300} duration="38s" opacity="opacity-40" />
      <Cloud top="80%" size={160} duration="26s" opacity="opacity-60" />
    </div>
  );
}
