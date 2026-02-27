import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Secure Engineering",
    description:
      "Writing clean, maintainable code with security, reliability, and scalability in mind.",
  },
  {
    icon: Rocket,
    title: "Systems & Performance",
    description:
      "Building efficient systems and optimizing performance from the application layer down.",
  },
  {
    icon: Users,
    title: "Team-Oriented",
    description:
      "Collaborating effectively with teams, stakeholders, and cross-disciplinary roles.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Approaching complex technical challenges with curiosity, logic, and creativity.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Designing secure systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one solution at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a Computer Science student and aspiring cybersecurity
                professional with a strong foundation in software engineering,
                system design, and security-focused development. My interest in
                technology started with curiosity about how systems work behind
                the scenes and evolved into a passion for building and protecting them.
              </p>
              <p>
                My experience spans full-stack development, cybersecurity
                fundamentals, AI-assisted systems, and hands-on projects
                involving intrusion detection, data analysis, and secure
                application design. I focus on writing code that is not only
                functional, but resilient and well-structured.
              </p>
              <p>
                Outside of coursework and projects, I spend time experimenting
                with new tools, strengthening my understanding of security
                concepts, and continuously refining my technical skill set to
                prepare for real-world challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to build software that is secure by design — systems that
                are thoughtful, reliable, and capable of standing up to real-world
                use and real-world threats."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};