import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div className="relative w-full h-64 rounded-lg overflow-hidden border border-black/10 dark:border-white/15">
        <Image src="/images/bg.jpeg" alt="Japan trip" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white drop-shadow">
          <p className="text-sm italic">&quot;Not everyone who works hard are rewarded, however all those who succeed have worked hard.&quot; — Kamogawa Genji, Hajime No Ippo</p>
        </div>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">About Me</h1>
      <p className="text-[color:var(--muted)]">
        I’m Neal Kapadia, a Computer Engineering student with a Biology minor. I like building useful things where engineering meets science—AI/ML in healthcare, tools that explain themselves, and interfaces that feel playful without getting in your way.
      </p>
      <p className="text-[color:var(--muted)]">
        Outside of code: I’m into tennis, golf, lifting, piano, and watching anime. I care about iteration, clear thinking, and systems that scale (from codebases to habits).
      </p>
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Languages: Python, C/C++, JavaScript/TypeScript, SQL, Verilog, MIPS</li>
          <li>Frameworks: React, Next.js, Flask, Django</li>
          <li>Libraries & Tools: Pandas, NumPy, scikit-learn, Git, VS Code</li>
        </ul>
      </div>
      <div className="flex gap-4 pt-2">
        <Link href="/resume" className="underline">View my resume</Link>
        <a href="https://www.linkedin.com/in/nealkapadia" className="underline" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/nealkapadia" className="underline" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}
