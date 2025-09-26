import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Header } from "./Header";

export function Portfolio() {
  const posts = [
    {
      date: "Dec 15, 2024",
      title: "Building Modern Web Apps with React and TypeScript",
      link: "#"
    },
    {
      date: "Dec 8, 2024", 
      title: "The Art of Clean Code: Lessons Learned",
      link: "#"
    },
    {
      date: "Nov 28, 2024",
      title: "Design Systems That Actually Work",
      link: "#"
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/johndoe",
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:john@example.com",
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
              I'm a 28-year-old developer, designer, and coffee enthusiast. 
              I make a living from crafting digital experiences that people actually enjoy using.
            </p>
            <p>
              Things that pique my interest are modern web technologies, 
              open-source software, minimalist design, and the endless pursuit of writing clean, 
              maintainable code. I believe in building things that matter.
            </p>
            <p>
              This website is a place for those things and others – mostly my thoughts 
              on development, design, and the web!
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
              I've been building for the web for over 5 years, working with everything 
              from small startups to larger companies. I specialize in React, TypeScript, 
              and modern web technologies.
            </p>
            <p>
              When I'm not coding, you'll find me reading about design, exploring new 
              coffee shops, or contributing to open source projects. I believe in 
              continuous learning and sharing knowledge with the community.
            </p>
            <p>
              I'm currently working on some exciting projects involving AI integration 
              and developer tools. Always open to interesting collaborations!
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
              I'm always interested in hearing about new projects and opportunities. 
              Whether you want to discuss a potential collaboration or just say hello, 
              feel free to reach out!
            </p>
            <p>
              <span className="font-medium text-portfolio-hero">Email:</span>{" "}
              <a 
                href="mailto:john@example.com" 
                className="text-accent hover:underline transition-colors underline-offset-4"
              >
                john@example.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>© John Doe 2024. 🚀 Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}