"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 35 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    setOut("");
    const tick = () => {
      i = Math.min(text.length, i + 1);
      setOut(text.slice(0, i));
      if (i < text.length) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [text]);
  return <span>{out}</span>;
}
