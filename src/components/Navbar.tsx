import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-2xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-heading text-lg font-bold tracking-tight text-foreground">
            AK<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="/Abhinav_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-heading font-semibold text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href="/Abhinav_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground ml-auto"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
