import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.03]" />
      <div className="absolute top-32 right-16 w-40 h-40 border border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-40 right-32 w-20 h-20 border border-border rotate-12 hidden lg:block" />

      <div className="container-custom relative z-10 pt-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Left: Main content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="inline-block text-base font-medium uppercase tracking-[0.2em] text-primary mb-8">
                Software Engineer — i95Dev
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight mb-8"
            >
              Kavuluru
              <br />
              <span className="gradient-text">Abhinav</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              Engineering robust backend systems, AI/ML pipelines, and scalable integrations — crafting efficient, data-driven solutions that power real-world business platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Info strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-row lg:flex-col gap-8 lg:gap-12 lg:border-l lg:border-border lg:pl-10"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</p>
              <p className="text-sm text-foreground">Hyderabad, India</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">Focus</p>
              <p className="text-sm text-foreground">Backend · AI/ML · eCommerce & ERP</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Abhinavkavuluru" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/abhinav-kavuluru-5147482a1" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:kavuluruabhinav.28@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex items-center gap-3"
        >
          <div className="editorial-line" />
          <a href="#about" className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            Scroll to explore
            <ArrowDown className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
