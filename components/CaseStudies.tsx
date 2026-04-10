import { caseStudies } from "@/data/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mb-16 lg:mb-24 scroll-mt-24">
      <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-8 lg:hidden">
        Case Studies
      </h3>
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <a
            key={study.title}
            href="#"
            className="group block rounded-xl border border-card-border bg-card-bg p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card-bg/80 hover:shadow-[0_0_30px_rgba(94,234,212,0.05)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-medium text-accent/70 mb-2">
                  {study.context}
                </p>
                <h4 className="text-lg font-semibold text-text-heading group-hover:text-accent transition-colors leading-snug">
                  {study.title}
                  <ArrowUpRight className="inline-block ml-1 w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </h4>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {study.challenge}
                </p>
                <p className="mt-3 text-sm font-medium text-accent/80">
                  {study.impact}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
