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
          <h2 id="contact-title" className="contact-heading">
            Contact Quantifier
          </h2>
          <p className="contact-lede">
            Send a message about a project, collaboration, or question.
          </p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
