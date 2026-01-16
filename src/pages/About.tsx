import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import {
  Lightbulb,
  Target,
  Book,
  Dumbbell,
  Mountain,
  Gamepad2,
  Cpu,
  Database,
  Microscope,
  Footprints,
  Film,
  Quote,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Back Button */}
      <a
        href="/#/"
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-all duration-300 backdrop-blur-sm"
      >
        <ArrowLeft className="w-6 h-6" />
      </a>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden" style={{
        backgroundImage: 'url(/uiuc.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            I'm Hugh, a Computer Engineering senior at UIUC who loves building projects across the whole abstraction stack, from low-level systems to full-stack applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Chicago → UIUC", "Systems + Embedded", "Builder mindset"].map(
              (tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-0"
                >
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Background */}
            <div>
            <h2 className="text-3xl font-bold mb-6">My story</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4 text-muted-foreground">
                <p>
                I'm a Computer Engineering senior at the University of Illinois at
                Urbana-Champaign. I’m from the Midwest and have lived in the greater
                Chicago area for most of my life. I’ve always been the kind of person who
                wants to understand how things work under the hood, not just how to use
                them.
                </p>

                <p>
                My interest in programming started early through iD Tech summer camps,
                where I learned how to control LEGO robots, build Minecraft mods in Java,
                and get comfortable with Python. In high school, I began taking computer
                science more seriously through courses like Intro to Programming, PLTW
                Cybersecurity, AP Computer Science, and AP Computer Science Principles.
                That foundation set me up well for college-level engineering coursework.
                </p>

                <p>
                Through my coursework at UIUC, I’ve become especially passionate about
                systems programming, embedded systems, and low-level software: the kind
                of work where performance, correctness, and hardware constraints all
                matter. Many of my projects reflect this intersection, and you can find
                more detail in my resume.
                </p>

                <p>
                I’ve also gained experience across both research and industry. At
                Northwestern, I automated a computational chemistry workflow on HPC to
                generate data for machine learning models. At SC Johnson, I helped a
                product development and research team modernize how they organize and
                search internal lab documentation by building OCR-driven ingestion,
                structured metadata pipelines, and improving query performance in a
                full-text search database.
                </p>

                <p>
                Outside of engineering work, I genuinely enjoy teaching and mentoring. As
                a Lead Instructor at iD Tech, I’ve taught robotics and AI concepts to
                students. It was an experience that strengthened my ability to explain technical
                ideas clearly and communicate with different learning styles.
                </p>
              </div>
              
              <div className="flex justify-center md:col-span-1">
                <img 
                  src="/hugh.png" 
                  alt="Hugh Palin" 
                  className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg sticky top-32"
                />
              </div>
            </div>
            </div>

          {/* What I care about */}
          <div>
            <h2 className="text-3xl font-bold mb-6">What I care about</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Systems, for real</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I like the “close to the metal” problems: concurrency, memory,
                  performance, and debugging when the bug isn’t obvious.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Data you can trust</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I’m drawn to databases and storage because they turn chaos
                  into something reliable, correctness matters as much as speed.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Useful wins</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I’m motivated by projects that reduce waste, save time, or
                  make a process simpler
                </p>
              </Card>
            </div>
          </div>

          {/* Interests / Outside the terminal */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Outside the terminal</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Footprints className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Running</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is my main way to clear my head. I like long runs, I am currently training for a marathon.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Dumbbell className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Lifting</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I like working out and pushing myself, it’s the same mindset
                  I bring to engineering: consistent reps and measurable progress.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Film className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Movies</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                    I’m a big fan of many different genres of music and movies, but I
                    especially love comedies and dramas that make you think. Some of my
                    favorite movies are the Blues Brothers, Iron Man, Midnight in Paris, and When Harry Met Sally.  
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-card border-border mt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Book className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Random thing about me</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    I know an unreasonable amount of history for a computer engineer. 
                    It’s fun, but it definitely earns me weird looks sometimes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Current Focus */}
          <div>
            <h2 className="text-3xl font-bold mb-6">What I’m building now</h2>
            <Card className="p-6 bg-card border-border">
              <p className="text-muted-foreground mb-4">
                Lately I’ve been focused on applying for jobs so I haven't been as focused on personal projects, but here are a few things I’ve been working on recently:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    <strong>Suction Sense:</strong> A hospital system to detect
                    and reduce unnecessary OR suction use — embedded sensors →
                    database → dashboard for visibility and accountability.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    <strong>Android Weather App:</strong> A full-featured Android
                    app with AI-driven UI personalization (Gemini API).
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Philosophy */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Quote</h2>
            <Card className="p-6 bg-card border-border">
                <div className="flex gap-4">
                <div className="shrink-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                    <Quote className="w-5 h-5 text-primary" />
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-muted-foreground text-lg leading-relaxed italic">
                    “Change will not come if we wait for some other person, or if we wait
                    for some other time. We are the ones we've been waiting for. We are
                    the change that we seek.”
                    </p>

                    <div className="flex items-center gap-3">
                    <div className="h-px w-10 bg-border" />
                    <p className="text-sm text-muted-foreground">Barack Obama</p>
                    </div>
                </div>
                </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border">
        <p>© 2026 Hugh Palin</p>
      </footer>
    </div>
  );
};

export default About;
