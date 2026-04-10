import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="pb-16 text-sm text-text-muted">
      <p className="max-w-md leading-relaxed">
        Loosely inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-text-heading hover:text-accent transition-colors"
        >
          Brittany Chiang
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-text-heading hover:text-accent transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-text-heading hover:text-accent transition-colors"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
