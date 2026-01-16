import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Hugh Palin</p>
      </footer>
    </div>
  );
};

export default Index;