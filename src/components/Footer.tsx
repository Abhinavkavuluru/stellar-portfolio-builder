import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            © {currentYear} Kavuluru Abhinav
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Abhinavkavuluru" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-kavuluru-5147482a1" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:kavuluruabhinav.28@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
