import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-primary text-6xl animate-bounce-slow opacity-60">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute top-40 right-20 text-accent text-4xl float opacity-70">
        <Zap className="w-10 h-10" />
      </div>
      <div className="absolute bottom-40 left-20 text-secondary text-5xl animate-spin-slow opacity-50">
        ⚙️
      </div>
      <div className="absolute bottom-32 right-16 text-primary float opacity-60">
        <Coffee className="w-8 h-8" />
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm mb-6 border-2 border-secondary shadow-[3px_3px_0px_hsl(var(--secondary))] animate-wiggle">
          🎉 Currently accepting snacks as payment
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 leading-none animate-fade-in-up">
          <span className="block text-secondary">I'M A</span>
          <span className="gradient-text">DEVELOPER</span>
          <span className="block text-secondary text-4xl md:text-5xl mt-2">
            (ALLEGEDLY)
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up stagger-2">
          I turn <span className="text-primary font-bold">caffeine</span> into{" "}
          <span className="text-accent font-bold">code</span> and bugs into{" "}
          <span className="line-through">features</span>{" "}
          <span className="font-bold">learning opportunities</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-3">
          <Button variant="hero" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            See My Work 🚀
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Hire Me (Please) 🙏
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in-up stagger-4">
        <span className="text-sm font-medium">Scroll if you dare</span>
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
