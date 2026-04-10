import { skillCategories } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="mb-16 lg:mb-24 scroll-mt-24">
      <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-8 lg:hidden">
        Skills & Tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group rounded-xl border border-card-border bg-card-bg p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card-bg/80"
          >
            <h4 className="text-sm font-semibold text-text-heading mb-3">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
