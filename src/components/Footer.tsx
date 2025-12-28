import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-xl font-bold gradient-text mb-2 inline-block">
              Abhinav<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kavuluru Abhinav. All rights reserved.
            </p>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" /> using React & Tailwind
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Abhinavkavuluru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-kavuluru-5147482a1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kavuluruabhinav.28@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
