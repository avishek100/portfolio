import { Code2, Bug, Coffee, Pizza } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const funFacts = [
    { icon: Coffee, text: "500+ cups of coffee consumed", color: "text-primary" },
    { icon: Bug, text: "1000+ bugs created (and fixed... mostly)", color: "text-accent" },
    { icon: Code2, text: "∞ Stack Overflow visits", color: "text-secondary" },
    { icon: Pizza, text: "Pizza-driven development expert", color: "text-primary" },
  ];

  return (
    <section className="py-24 px-4" id="about" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            <span className="text-secondary">ABOUT</span>{" "}
            <span className="gradient-text">ME</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            (The part where I pretend to be interesting)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image area */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left stagger-2' : 'scroll-hidden'}`}>
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-primary rounded-3xl border-4 border-secondary shadow-[8px_8px_0px_hsl(var(--secondary))] flex items-center justify-center text-8xl rotate-3 hover:rotate-0 transition-transform duration-300">
              🧑‍💻
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl border-2 border-secondary shadow-[4px_4px_0px_hsl(var(--secondary))] font-bold text-sm -rotate-6">
              Actual photo*
            </div>
            <p className="text-xs text-muted-foreground mt-8 text-center italic">
              *May not be actual photo
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className={`comic-box bg-card p-6 ${isVisible ? 'animate-fade-in-right stagger-2' : 'scroll-hidden'}`}>
              <h3 className="font-display text-2xl text-secondary mb-3">
                THE ORIGIN STORY
              </h3>
              <p className="text-foreground leading-relaxed">
                Once upon a time, a young human discovered that typing random
                things into a computer could make it do stuff. This was either a
                blessing or a curse, depending on who you ask (my parents say
                curse).
              </p>
            </div>

            <div className={`comic-box bg-card p-6 ${isVisible ? 'animate-fade-in-right stagger-3' : 'scroll-hidden'}`}>
              <h3 className="font-display text-2xl text-secondary mb-3">
                THE REALITY
              </h3>
              <p className="text-foreground leading-relaxed">
                I'm a full-stack developer who specializes in building things
                that work <span className="italic">most</span> of the time. I
                believe in clean code, dark mode, and the healing power of
                rubber duck debugging.
              </p>
            </div>

            {/* Fun facts */}
            <div className="grid grid-cols-2 gap-3">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className={`bg-muted p-4 rounded-xl border-2 border-secondary flex items-center gap-3 hover:scale-105 transition-transform ${isVisible ? `animate-scale-fade-in stagger-${index + 4}` : 'scroll-hidden'}`}
                >
                  <fact.icon className={`w-6 h-6 ${fact.color}`} />
                  <span className="text-sm font-medium">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
