import Image from "next/image";

export function Nav() {
  return (
    <header className="nav">
      <a className="nav-brand" href="#top" aria-label="Quantifier home">
        <Image src="/quantifier.png" alt="" width={120} height={120} priority />
        <span className="nav-brand-name">
          Quantifier{" | "}
          <span className="nav-brand-tagline">∀ problem ∃ solution</span>
        </span>
      </a>
      <nav aria-label="Primary">
        <ul className="nav-links">
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://www.github.com/Quantifier-Tech"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
