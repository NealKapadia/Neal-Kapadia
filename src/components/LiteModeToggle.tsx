"use client";

import { useUI } from "../store/ui";

export default function LiteModeToggle() {
  const { liteMode, toggleLiteMode } = useUI();
  return (
    <button
      onClick={toggleLiteMode}
      className="px-3 py-1.5 rounded border border-black/10 dark:border-white/15 text-[color:var(--foreground)] hover:bg-surface transition"
      aria-pressed={liteMode}
      title={liteMode ? "Switch to 3D" : "Switch to Lite"}
    >
      {liteMode ? "Enable 3D" : "Use Lite"}
    </button>
  );
}
