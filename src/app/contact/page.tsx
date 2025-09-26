export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="text-[color:var(--muted)]">Feel free to reach out via any of the options below.</p>
      <ul className="space-y-2 text-sm">
        <li>
          <strong>Email:</strong> <a className="underline" href="mailto:nkapadia15@outlook.com">nkapadia15@outlook.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <a className="underline" href="tel:+19729796413">(972) 979-6413</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a className="underline" href="https://www.linkedin.com/in/nealkapadia" target="_blank" rel="noreferrer">linkedin.com/in/nealkapadia</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a className="underline" href="https://github.com/nealkapadia" target="_blank" rel="noreferrer">github.com/nealkapadia</a>
        </li>
        <li>
          <strong>Devpost:</strong> <a className="underline" href="https://devpost.com/NealKapadia" target="_blank" rel="noreferrer">devpost.com/NealKapadia</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a className="underline" href="https://www.instagram.com/keal_napadia/" target="_blank" rel="noreferrer">@keal_napadia</a>
        </li>
      </ul>
    </div>
  );
}
