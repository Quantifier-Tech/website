import Image from "next/image";

const items = [
  {
    title: "Software Development",
    src: "/images/portfolio/laptop.jpg",
    alt: "Laptop on a desk",
  },
  {
    title: "Functional Programming",
    src: "/images/portfolio/blue_purple_shell.jpg",
    alt: "Iridescent shell",
  },
  {
    title: "Blockchain",
    src: "/images/portfolio/blocks.jpg",
    alt: "Stacked blocks",
  },
  {
    title: "Mathematics",
    src: "/images/portfolio/blue_purple_spiral.jpg",
    alt: "Abstract spiral",
  },
  {
    title: "Formal Verification",
    src: "/images/portfolio/purple_grid.jpg",
    alt: "Geometric grid",
  },
  {
    title: "Distributed Systems",
    src: "/images/portfolio/blue_purple_planet.jpg",
    alt: "Planet-like sphere",
  },
] as const;

export function Portfolio() {
  return (
    <section className="portfolio" aria-label="Focus areas">
      <div className="portfolio-grid">
        {items.map((item) => (
          <article key={item.title} className="portfolio-item">
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={900}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              loading="eager"
            />
            <p className="portfolio-item-label">{item.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
