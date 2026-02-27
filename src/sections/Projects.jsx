import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "AI Intrusion Detection System",
    description:
      "An AI-powered security system using computer vision to detect human presence, capture events, and log alerts for monitoring and analysis.",
    image: "/projects/project1.png",
    tags: ["Python", "AI/ML", "Raspberry Pi", "Computer Vision"],
    link: "https://github.com/IlDannylI/AI-Intrusion-Detection-Camera",
    github: "https://github.com/IlDannylI/AI-Intrusion-Detection-Camera",
  },
  {
    title: "SIEM & Security Monitoring Dashboard",
    description:
      "A lightweight SIEM-style dashboard for aggregating logs, visualizing security events, and identifying suspicious activity across systems.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "PHP", "MySQL", "Security"],
    link: "https://github.com/Chrishamie141/siem-dashboard",
    github: "https://github.com/Chrishamie141/siem-dashboard",
  },
  {
    title: "Garvis AI Assistant",
    description:
      "A personal AI assistant project focused on automation, assistant workflows, and intelligent interaction features for practical use cases.",
    image: "/projects/project3.png",
    tags: ["Python", "AI Assistant", "Automation"],
    link: "https://github.com/Chrishamie141/Garvis",
    github: "https://github.com/Chrishamie141/Garvis",
  },
  {
    title: "Lab 2 Project",
    description:
      "A hands-on course project demonstrating core programming and problem-solving skills with practical implementation and structured development.",
    image: "/projects/project4.png",
    tags: ["Coursework", "Programming", "Problem Solving"],
    link: "https://github.com/Chrishamie141/Lab2",
    github: "https://github.com/Chrishamie141/Lab2",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              solve real problems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of hands-on projects focused on cybersecurity,
            automation, data analysis, and real-world system design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title"
                  >
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Chrishamie141"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};