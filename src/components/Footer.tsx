import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Athikesavan S. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ShandoshAathi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:shandosh6381aathi@gmail.com"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+918883806053"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
