import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Heart } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const socials = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-secondary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-primary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-accent" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-primary" },
  ];

  return (
    <section className="py-24 px-4 bg-secondary text-secondary-foreground" id="contact" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-display text-5xl md:text-7xl mb-4 ${isVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}>
          LET'S <span className="text-primary">CHAT</span>
        </h2>
        <p className={`text-xl opacity-80 mb-8 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up stagger-1' : 'scroll-hidden'}`}>
          I promise I'm friendlier than my code comments suggest. Reach out for
          projects, opportunities, or just to share memes.
        </p>

        {/* CTA Box */}
        <div className={`bg-background text-foreground rounded-3xl p-8 md:p-12 border-4 border-primary shadow-[8px_8px_0px_hsl(var(--primary))] mb-12 ${isVisible ? 'animate-scale-fade-in stagger-2' : 'scroll-hidden'}`}>
          <div className="text-6xl mb-6">📬</div>
          <h3 className="font-display text-3xl text-secondary mb-4">
            HIRE ME BEFORE I HAVE TO GET A "REAL JOB"
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Currently available for freelance work, full-time positions, or
            anyone willing to pay me in pizza. Response time: faster than my
            code compiles.
          </p>
          <Button variant="hero" size="lg" className="text-xl">
            <Mail className="w-5 h-5" />
            hello@definitelyreal.email
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up stagger-3' : 'scroll-hidden'}`}>
          {socials.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className={`w-14 h-14 bg-background rounded-xl border-2 border-primary shadow-[4px_4px_0px_hsl(var(--primary))] flex items-center justify-center text-foreground ${social.color} hover:-translate-y-1 hover:shadow-[4px_6px_0px_hsl(var(--primary))] transition-all duration-200`}
              aria-label={social.label}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className={`pt-8 border-t border-primary/30 ${isVisible ? 'animate-fade-in-up stagger-5' : 'scroll-hidden'}`}>
          <p className="text-sm opacity-70 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" />,{" "}
            <span className="text-primary">caffeine</span>, and questionable
            life choices
          </p>
          <p className="text-xs opacity-50 mt-2">
            © {new Date().getFullYear()} | No bugs were harmed in the making
            of this website (they're still here)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
