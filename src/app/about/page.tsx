import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">About Me</h1>
      <p className="text-[color:var(--muted)]">
        Passionate Computer Engineering student with a Biology minor — driven to improve healthcare through technology.
      </p>
      <p className="text-sm text-[color:var(--muted)]">
        I’m currently pursuing a Bachelor of Science at the University of Texas at Dallas (Academic Excellence Award Recipient). I enjoy building interactive, performant experiences that bridge design and engineering — often with React, Next.js, and three.js — and exploring AI/ML applications that can make a real-world impact.
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
