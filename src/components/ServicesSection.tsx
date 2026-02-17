import { Brain, BarChart3, Code2 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building intelligent models and systems that learn, adapt, and deliver real-world impact through advanced algorithms and deep learning.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Python-based data visualization and insights extraction, turning raw datasets into compelling stories and actionable business intelligence.",
  },
  {
    icon: Code2,
    title: "Python Programming",
    description:
      "Crafting clean, efficient code and automation scripts. From web scraping to API development — scalable solutions for complex problems.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            My Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-8 group cursor-default fade-in-up"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
