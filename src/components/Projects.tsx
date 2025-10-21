import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
  {
    title: "Custom RISC-V Operating System",
    period: "Mar. 2025 – May. 2025",
    tech: ["RISC-V", "C"],
    description: [
      "Designed a custom operating system with a shell interface to interact with a file system and launch user programs.",
      "Built core OS components including scheduling, memory management, and device drivers with UART and virtio, incorporating support for interrupts and memory-mapped I/O in a large codebase.",
      "Implemented process scheduling and forking and context switching to support multi-tasking across user programs.",
      "Integrated a filesystem with multi-process and file descriptor support across isolated memory spaces.",
      "Developed memory management modules with paging and virtual memory to allocate resources efficiently."
    ]
  },
  {
    title: "PDB-Pal",
    period: "May 2024 – Aug. 2024",
    tech: ["Python"],
    description: [
      "Developed internal tools and Python functions to rapidly configure PDB files for simulations.",
      "Automated the generation of large datasets using molecular mechanics on high-performance computers, enhancing accuracy and minimizing errors in quantum mechanics simulations."
    ]
  },
  {
    title: "Shell Shockers",
    period: "Oct. 2024 – Nov. 2024",
    tech: ["System Verilog", "C"],
    description: [
      "Designed a turn-based tank game inspired by Shell Shock Live on an FPGA, incorporating an interactive menu, randomized wind patterns, real-time scorekeeping, and physics-based projectile motion.",
      "Developed a high-performance VGA-based graphical interface leveraging BRAM for efficient color storage and custom modules for precise VGA controller programming, allowing reuse of sprites.",
      "Integrated a softcore MicroBlaze processor for USB keyboard input via SPI communication, enabling responsive and intuitive game control, using the MAX3421E USB peripheral controller to take in keyboard inputs."
    ]
  },
  {
    title: "Convolutional Neural Network",
    period: "Oct. 2024 – Nov. 2024",
    tech: ["C"],
    description: [
      "Developed and implemented the forward propagation of a CNN based on the LeNet-5 architecture for accurate recognition of hand-written digits, employing advanced machine learning techniques.",
      "Significantly enhance training and testing speeds, using parallel programming techniques on an A40 GPU such as cuBLAS and matrix multiply with shared memory tiling."
    ]
  }
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="relative group">
          {/* Left Arrow */}
          <Button
            variant="secondary"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-0 group-hover:opacity-100 bg-card/90 backdrop-blur hover:bg-accent hover:text-accent-foreground' 
                : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 w-[340px] md:w-[380px] p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105 snap-center"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <Badge variant="outline" className="gap-1 text-xs mb-3">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="secondary"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-0 group-hover:opacity-100 bg-card/90 backdrop-blur hover:bg-accent hover:text-accent-foreground' 
                : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
