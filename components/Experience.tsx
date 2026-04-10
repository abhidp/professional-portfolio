import { experience } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="mb-16 lg:mb-24 scroll-mt-24">
      <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-8 lg:hidden">
        Experience
      </h3>
      <div className="space-y-2">
        {experience.map((role) => (
          <div
            key={role.dateRange}
            className="group rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-card-border hover:bg-card-bg/50 hover:backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-32 shrink-0">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider whitespace-nowrap">
                  {role.dateRange}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-text-heading group-hover:text-accent transition-colors">
                  {role.role}
                  <span className="text-text-muted font-normal">
                    {" "}
                    · {role.company}
                  </span>
                </h4>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {role.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pl-5">
        <a
          href="#"
          className="group inline-flex items-center gap-1 text-sm font-medium text-text-heading hover:text-accent transition-colors"
        >
          View Full Resume
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
