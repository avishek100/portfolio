import useScrollAnimation from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const skills = [
    { name: "JavaScript", level: 85, comment: "We have a love-hate relationship" },
    { name: "React", level: 90, comment: "useState(confused)" },
    { name: "CSS", level: 70, comment: "Why won't you center?!" },
    { name: "TypeScript", level: 75, comment: "Any any any any" },
    { name: "Git", level: 60, comment: "git push --force (sorry team)" },
    { name: "Googling", level: 99, comment: "My real superpower" },
    { name: "Pretending to Work", level: 95, comment: "Alt-tabbing master" },
    { name: "Meeting Survival", level: 80, comment: "This could've been an email" },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30" id="skills" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            <span className="text-secondary">MY</span>{" "}
            <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            (Measured in confidence, not competence)
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`comic-box bg-card p-4 md:p-6 ${isVisible ? `animate-fade-in-up stagger-${Math.min(index + 1, 8)}` : 'scroll-hidden'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <span className="font-bold text-lg min-w-[140px]">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground italic">
                  "{skill.comment}"
                </span>
              </div>

              <div className="relative h-8 bg-muted rounded-lg border-2 border-secondary overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-r-md transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${(index + 1) * 100}ms`
                  }}
                >
                  <span className="text-sm font-bold text-secondary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up stagger-8' : 'scroll-hidden'}`}>
          <div className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-xl border-2 border-secondary font-bold text-sm">
            ⚠️ Disclaimer: Percentages are 100% made up
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
