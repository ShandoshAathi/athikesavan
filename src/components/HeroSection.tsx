const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-72 h-72 bg-primary top-20 -left-20" />
      <div className="orb w-96 h-96 bg-accent bottom-20 -right-32" style={{ animationDelay: "3s" }} />
      <div className="orb w-48 h-48 bg-primary/50 top-1/2 left-1/3" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 fade-in-up visible">
          Hello, I'm
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight fade-in-up visible" style={{ transitionDelay: "0.1s" }}>
          ATHIKESAVAN S
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up visible" style={{ transitionDelay: "0.2s" }}>
          Artificial Intelligence & Data Science Engineer | Python Programmer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up visible" style={{ transitionDelay: "0.3s" }}>
          <a href="#contact" className="glow-btn text-base px-8 py-3 rounded-xl">
            Hire Me
          </a>
          <a href="#projects" className="glow-btn-outline text-base px-8 py-3 rounded-xl">
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
