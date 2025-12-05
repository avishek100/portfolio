import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luminance",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    title: "Mindful",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop",
  },
  {
    title: "Finova",
    category: "Brand & Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-muted-foreground mb-10">Selected Work</p>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
