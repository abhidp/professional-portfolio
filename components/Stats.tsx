import { stats } from "@/data/portfolio-data";

export default function Stats() {
  return (
    <section className="mb-16 lg:mb-24">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-xl border border-card-border bg-card-bg p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card-bg/80 hover:shadow-[0_0_30px_rgba(94,234,212,0.05)]"
          >
            <div className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
