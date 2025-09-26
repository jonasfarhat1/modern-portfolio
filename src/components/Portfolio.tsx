import { ThemeToggle } from "./ThemeToggle";

export function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Two", 
      description: "An e-commerce platform with seamless user experience.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project Three",
      description: "A mobile-first design system and component library.",
      tech: ["React Native", "Figma", "Storybook"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />
      
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-portfolio-hero mb-4 transition-colors">
            John Doe
          </h1>
          <p className="text-xl text-portfolio-subtitle mb-6 transition-colors">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I create digital experiences that are both beautiful and functional. 
            Passionate about clean code, intuitive design, and solving complex problems.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-portfolio-hero transition-colors">
            About
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using the latest technologies. I believe in 
              writing clean, maintainable code and designing user-centered experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-portfolio-hero transition-colors">
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-portfolio-section border border-border transition-all duration-300 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-portfolio-hero">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-portfolio-hero transition-colors">
            Contact
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Let's work together! I'm always open to discussing new opportunities 
              and interesting projects.
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-portfolio-hero">Email:</span>{" "}
                <a 
                  href="mailto:john@example.com" 
                  className="text-accent hover:underline transition-colors"
                >
                  john@example.com
                </a>
              </p>
              <p>
                <span className="font-medium text-portfolio-hero">LinkedIn:</span>{" "}
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  className="text-accent hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/johndoe
                </a>
              </p>
              <p>
                <span className="font-medium text-portfolio-hero">GitHub:</span>{" "}
                <a 
                  href="https://github.com/johndoe" 
                  className="text-accent hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/johndoe
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}