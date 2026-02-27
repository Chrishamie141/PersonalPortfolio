import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "C++",
  "Cybersecurity",
  "SOC Analysis",
  "Linux",
  "SQL",
  "Machine Learning",
  "Docker",
  "AWS",
  "Raspberry Pi",
  "Network Security",
  "Digital Forensics",
  "Git",
  "Threat Detection",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background/90" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Software Engineer • Cybersecurity Focused
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">secure</span>
                <br />
                and intelligent
                <br />
                <span className="font-serif italic font-normal text-white">
                  digital systems.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Chris Hamilton — a Computer Science senior specializing in
                cybersecurity, AI-driven systems, and full-stack development.
                I design secure applications, build intrusion detection tools,
                and develop scalable software solutions that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button
                  size="large"
                  className="flex items-center justify-center gap-2 px-7"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                 href="/Christopher-Hamilton-Resume.pdf"
                    download="Christopher-Hamilton-Resume.pdf"
                      target="_blank"
                        rel="noopener noreferrer"
                          >
                  <AnimatedBorderButton>
                      <Download className="w-5 h-5" />
                        Download Resume
                  </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Connect:</span>
              {[
  { Icon: Github, href: "https://github.com/Chrishamie141", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/chrisham141", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/__chrisnj", label: "Instagram" },
].map((social, i) => (
  <a
    key={i}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.label}
    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
  >
    <social.Icon className="w-5 h-5" />
  </a>
))}
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Chris Hamilton"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Coding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Core Technologies & Expertise
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};