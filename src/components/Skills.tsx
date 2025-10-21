import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C", "C++", "Python", "CUDA", "SystemVerilog", "VHDL", "RISC-V assembly", "LC-3", "Java", "HTML/CSS", "SQL"]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Bash", "Git", "Docker", "Visual Studio Code", "Linux", "Vivado", "Quartus", "KiCad", "GDB", "Valgrind", "Qemu"]
  },
  {
    title: "Data Tools & Libraries",
    icon: Database,
    skills: ["Microsoft Excel", "ChimeraX", "Tensorflow", "Keras", "NumPy", "Pandas", "Scikit", "Matplotlib"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-secondary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
