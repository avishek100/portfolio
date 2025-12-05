const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 pt-32">
        <div className="max-w-2xl space-y-6">
          <p className="text-muted-foreground animate-fade-up opacity-0">
            Creative Developer
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight animate-fade-up opacity-0 delay-100">
            I build digital products that people love to use
          </h1>
          
          <p className="text-lg text-muted-foreground animate-fade-up opacity-0 delay-200">
            Designer and developer based in San Francisco, crafting thoughtful digital experiences.
          </p>
          
          <div className="flex gap-4 pt-2 animate-fade-up opacity-0 delay-300">
            <a
              href="#work"
              className="px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
