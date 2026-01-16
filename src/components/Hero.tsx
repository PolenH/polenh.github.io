import { Mail, Linkedin, Github, FileDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-10 gradient-text leading-tight md:leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Hugh Palin
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Computer Engineering Student
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          University of Illinois at Urbana-Champaign • GPA: 3.62/4.00
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a href="mailto:hughapalin@gmail.com">
            <Button variant="secondary" size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Email
            </Button>
          </a>
          
          <a href="https://www.linkedin.com/in/hughpalin" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </a>
          
          <a href="https://github.com/hpalin2" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </a>
          
          <a href={resumeUrl} download>
            <Button variant="secondary" size="lg" className="gap-2">
              <FileDown className="w-5 h-5" />
              Download Resume
            </Button>
          </a>
          
          <a href="/#/about">
            <Button variant="secondary" size="lg" className="gap-2">
              <BookOpen className="w-5 h-5" />
              About Me
            </Button>
          </a>
        </div>
        
        <div className="text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            hughapalin@gmail.com
          </p>
          <p className="mt-2">224-300-9828</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
