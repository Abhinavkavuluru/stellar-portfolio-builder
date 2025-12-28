import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-24 h-24 md:w-40 md:h-40 border-2 border-primary/20 rounded-full float-slow" />
      <div className="absolute bottom-32 left-10 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-accent/10 rounded-2xl rotate-12 float-medium" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-bounce-subtle" />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main content */}
          <div className="lg:col-span-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Intern @ i95Dev</span>
            </motion.div>

            {/* Name - Large editorial style */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-6"
            >
              <span className="block">Kavuluru</span>
              <span className="block gradient-text">Abhinav</span>
            </motion.h1>

            {/* Role tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {['Software Engineer', 'AI & ML', 'Full Stack'].map((role, i) => (
                <span 
                  key={role}
                  className="px-4 py-2 text-sm font-mono font-medium border-2 border-border rounded-full bg-card"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Building scalable AI-powered applications with expertise in 
              <span className="text-foreground font-medium"> Python</span>,
              <span className="text-foreground font-medium"> TensorFlow</span>, and 
              <span className="text-foreground font-medium"> modern web tech</span>. 
              Turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-ghost">
                Let's Talk
              </a>
              
              <div className="flex items-center gap-1 ml-4">
                <a
                  href="https://github.com/Abhinavkavuluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinav-kavuluru-5147482a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kavuluruabhinav.28@gmail.com"
                  className="p-3 rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="bento-card-featured space-y-6">
              <div className="text-center pb-6 border-b border-border">
                <div className="font-heading text-6xl font-extrabold gradient-text mb-2">9.19</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">CGPA</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-foreground">4+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-foreground">3+</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Location</div>
                <div className="font-medium">Hyderabad, India 🇮🇳</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-[0.2em] font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce-subtle" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;