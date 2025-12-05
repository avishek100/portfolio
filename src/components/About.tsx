const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground mb-4">About</p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground">
            I'm a creative developer with 5+ years of experience building websites 
            and applications. I focus on clean code, thoughtful design, and creating 
            products that solve real problems.
          </p>
          <div className="flex gap-12 mt-10 text-sm">
            <div>
              <div className="text-2xl font-display mb-1">50+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-display mb-1">5+</div>
              <div className="text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="text-2xl font-display mb-1">30+</div>
              <div className="text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
