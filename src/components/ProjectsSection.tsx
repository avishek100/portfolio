import { ExternalLink, Github, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: "Todo App #47",
      description: "Because the world needed another todo app. This one has dark mode though, so it's basically revolutionary.",
      tech: ["React", "TypeScript", "Tears"],
      emoji: "✅",
      status: "Works on my machine™",
    },
    {
      title: "Weather App",
      description: "It tells you the weather. Groundbreaking, I know. Sometimes it's even accurate!",
      tech: ["JavaScript", "API Calls", "Hope"],
      emoji: "🌤️",
      status: "Mostly sunny",
    },
    {
      title: "E-commerce Clone",
      description: "A clone of a clone of a clone. The shopping cart actually works, which surprised everyone including me.",
      tech: ["React", "Node.js", "Dreams"],
      emoji: "🛒",
      status: "Add to cart (please)",
    },
    {
      title: "This Portfolio",
      description: "Meta, isn't it? You're looking at it right now. If you see bugs, those are features.",
      tech: ["React", "Tailwind", "Caffeine"],
      emoji: "🎨",
      status: "Under construction forever",
    },
  ];

  return (
    <section className="py-24 px-4" id="projects" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            <span className="text-secondary">MY</span>{" "}
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            (Things I built instead of sleeping)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`comic-box bg-card p-6 group ${isVisible ? `animate-scale-fade-in stagger-${index + 1}` : 'scroll-hidden'}`}
            >
              {/* Emoji header */}
              <div className="text-6xl mb-4 group-hover:animate-wiggle transition-all">
                {project.emoji}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-secondary mb-2">
                {project.title}
              </h3>

              {/* Status badge */}
              <div className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                <AlertTriangle className="w-3 h-3" />
                {project.status}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button variant="default" size="sm">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
