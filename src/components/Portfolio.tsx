import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Header } from "./Header";

export function Portfolio() {
  const posts = [
    {
      date: "Dec 15, 2024",
      title: "Getting Started with Modern Web Development",
      link: "#"
    },
    {
      date: "Dec 8, 2024", 
      title: "Building Your First React Application",
      link: "#"
    },
    {
      date: "Nov 28, 2024",
      title: "Introduction to TypeScript for Beginners",
      link: "#"
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section id="home" className="mb-16">
          <h1 className="text-4xl font-bold text-portfolio-hero mb-6 transition-colors">
            Hello there!
          </h1>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Hello and welcome to my little corner of the web.
            </p>
            <p>
              I'm a passionate developer who loves creating digital experiences. 
              I enjoy working with modern technologies and building things that make a difference.
            </p>
            <p>
              Things that interest me include web development, open-source software, 
              clean code, and continuous learning. This portfolio template showcases 
              a clean, minimal design perfect for developers and creatives.
            </p>
            <p>
              Feel free to customize this template and make it your own!
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">Find me on</p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Section */}
        <section id="posts" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-portfolio-hero transition-colors">
            Posts
          </h2>
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article key={index} className="flex items-start space-x-4 group">
                <time className="text-sm text-muted-foreground font-mono min-w-[100px] pt-1">
                  {post.date}
                </time>
                <div className="flex-1">
                  <a 
                    href={post.link}
                    className="text-foreground hover:text-accent transition-colors group-hover:underline underline-offset-4"
                  >
                    {post.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-hero transition-colors">
            About
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This is a customizable portfolio template built with React, TypeScript, 
              and Tailwind CSS. It features a clean, minimal design with dark/light mode support 
              and smooth animations.
            </p>
            <p>
              The template includes sections for personal introduction, blog posts, 
              about information, and contact details. All content is easily customizable 
              to match your personal brand and style.
            </p>
            <p>
              Feel free to fork this project, customize it, and make it your own. 
              It's designed to be a starting point for your personal portfolio website.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-hero transition-colors">
            Get in touch
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Interested in using this template? Feel free to customize it for your own portfolio. 
              You can find the source code and documentation on GitHub.
            </p>
            <p>
              <span className="font-medium text-portfolio-hero">Email:</span>{" "}
              <a 
                href="mailto:your.email@example.com" 
                className="text-accent hover:underline transition-colors underline-offset-4"
              >
                your.email@example.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>© Your Name 2024. Built and developed by Jonas Farhat</p>
        </div>
      </footer>
    </div>
  );
}