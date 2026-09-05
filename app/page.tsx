import { ContactForm } from "@/components/ContactForm";
import { Nav } from "@/components/Nav";
import { Portfolio } from "@/components/Portfolio";

export default function HomePage() {
  return (
    <div className="site" id="top">
      <Nav />

      <main>
        <Portfolio />

        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
