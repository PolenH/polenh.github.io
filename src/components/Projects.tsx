import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Calendar } from "lucide-react";

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
  return (
    <section className="py-20 px-4 bg-secondary/30" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105"
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
      </div>
    </section>
  );
};

export default Projects;
