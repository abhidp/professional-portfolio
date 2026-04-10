import SpotlightCursor from "@/components/SpotlightCursor";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <SpotlightCursor />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-6 lg:w-[60%] lg:py-24">
          <Stats />
          <About />
          <Skills />
          <Experience />
          <CaseStudies />
          <Articles />
          <Footer />
        </main>
      </div>
    </div>
  );
}
