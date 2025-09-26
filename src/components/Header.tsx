import { Github, Linkedin, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-accent">YN</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Your Name</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm text-accent hover:text-accent/80 transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#posts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Posts
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}