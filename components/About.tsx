import { aboutParagraphs } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="mb-16 lg:mb-24 scroll-mt-24">
      <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-8 lg:hidden">
        About
      </h3>
      <div className="space-y-4">
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} className="text-text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
