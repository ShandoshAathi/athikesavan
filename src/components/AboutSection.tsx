const AboutSection = () => {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Data Visualization",
    "Problem Solving",
    "Adaptability",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Passionate about{" "}
              <span className="text-primary">AI & Data</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Motivated AI & Data Science professional with a strong foundation in Python programming, data analysis, and problem-solving. Passionate about leveraging AI technologies to build intelligent systems and extract meaningful insights from data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Currently pursuing a Bachelor's degree in Artificial Intelligence & Data Science at Suguna College of Engineering, Coimbatore. Adaptable, analytical thinker with strong communication and teamwork skills.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass px-4 py-2 rounded-full text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
            <div className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Education</p>
                  <p className="text-foreground font-medium">B.Tech in AI & Data Science</p>
                  <p className="text-sm text-muted-foreground">Suguna College of Engineering • 2023–2027</p>
                </div>
                <div className="w-full h-px bg-foreground/10" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Coimbatore, India</p>
                </div>
                <div className="w-full h-px bg-foreground/10" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Languages</p>
                  <p className="text-foreground font-medium">English & Tamil (Fluent)</p>
                </div>
                <div className="w-full h-px bg-foreground/10" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Focus Areas</p>
                  <p className="text-foreground font-medium">Machine Learning, Data Visualization, Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
