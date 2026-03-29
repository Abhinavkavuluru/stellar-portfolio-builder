import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Download } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">06 — Contact</span>
            <div className="editorial-line mt-4" />
          </motion.div>

          {/* Right content */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Let's build something <span className="gradient-text">remarkable</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-[1.8] max-w-lg mb-12"
            >
              I'm open to new opportunities and interesting projects. 
              Whether you have a question or just want to connect — I'd love to hear from you.
            </motion.p>

            {/* Contact grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 mb-12"
            >
              <a href="mailto:kavuluruabhinav.28@gmail.com"
                className="card-editorial p-6 flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">kavuluruabhinav.28@gmail.com</p>
                </div>
              </a>
              <a href="tel:+916303732572"
                className="card-editorial p-6 flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">+91 6303732572</p>
                </div>
              </a>
              <a href="https://github.com/Abhinavkavuluru" target="_blank" rel="noopener noreferrer"
                className="card-editorial p-6 flex items-start gap-4 group">
                <Github className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1">GitHub</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    @Abhinavkavuluru <ArrowUpRight className="w-3 h-3" />
                  </p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/abhinav-kavuluru-5147482a1" target="_blank" rel="noopener noreferrer"
                className="card-editorial p-6 flex items-start gap-4 group">
                <Linkedin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    Abhinav Kavuluru <ArrowUpRight className="w-3 h-3" />
                  </p>
                </div>
              </a>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:kavuluruabhinav.28@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="/Abhinav_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
