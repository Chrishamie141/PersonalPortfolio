import { Navbar } from "@/layouts/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { PortfolioBot } from "@/components/PortfolioBot";
import { Footer } from "@/layouts/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <PortfolioBot />
    </div>
  );
}

export default App;