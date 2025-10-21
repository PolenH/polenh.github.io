import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Lead Instructor",
    company: "iD Tech at Northwestern University",
    location: "Evanston, IL",
    period: "May 2025 – Aug. 2025",
    description: [
      "Taught middle and high school students artificial intelligence concepts in Python, leveraging TensorFlow to train custom image recognition models that classified real-world inputs such as hand gestures and drawings.",
      "Instructed students in C++ programming for VEX robotics, covering motor control, sensor integration, and mechanical systems to build competitive battle-ready robots.",
      "Led a team of instructors, mentored new instructors, and managed daily classroom operations at iD Tech."
    ]
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Northwestern University",
    location: "Evanston, IL",
    period: "May 2024 – Aug. 2024",
    description: [
      "Conducted research focused on identifying pathways to catalyze reactions yielding value-added products, such as pharmaceuticals or biofuels. Leveraged computational modeling to evaluate the feasibility of reactions.",
      "Designed a Python workflow to automate the generation of molecular structures for simulating enzymatic reactions, reducing manual input by 99%. Ensured seamless integration with downstream machine learning models.",
      "Leveraged high-performance computing to conduct large-scale enzyme-substrate interaction simulations, using a combination of QM and MM techniques to optimize computational runtime while preserving accuracy in results."
    ]
  },
  {
    title: "Database Intern",
    company: "SC Johnson & Son, Inc.",
    location: "Racine, WI",
    period: "May 2023 – Aug. 2023",
    description: [
      "Developed a digital cataloging system to transition paper-based reports into a structured, searchable database, leveraging Python for data extraction and automation to enhance accessibility and visualization.",
      "Optimized and updated a full-text search database using SQL and metadata indexing, enabling keyword-based document retrieval with optimized query performance."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-4 md:mb-0">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                
                <Badge variant="secondary" className="gap-2 w-fit">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </Badge>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-2">▹</span>
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

export default Experience;
