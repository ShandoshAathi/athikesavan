import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description:
      "An intelligent conversational AI built with Python and NLP techniques, capable of understanding context and providing relevant responses.",
    tags: ["Python", "NLP", "AI"],
    link: "https://github.com/ShandoshAathi",
  },
  {
    title: "Sales Data Dashboard",
    description:
      "Interactive data visualization dashboard for analyzing sales trends, built with Python, Pandas, and Matplotlib for actionable business insights.",
    tags: ["Python", "Pandas", "Visualization"],
    link: "https://github.com/ShandoshAathi",
  },
  {
    title: "Image Classification Model",
    description:
      "Deep learning model for classifying images using Convolutional Neural Networks, trained on large datasets with TensorFlow and Keras.",
    tags: ["Deep Learning", "TensorFlow", "CNN"],
    link: "https://github.com/ShandoshAathi",
  },
  {
    title: "Web Scraping Automation",
    description:
      "Automated data collection tool that scrapes structured data from websites, processes it, and exports clean CSV files for analysis.",
    tags: ["Python", "BeautifulSoup", "Automation"],
    link: "https://github.com/ShandoshAathi",
  },
];

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-8 group fade-in-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
              >
                View Code
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
