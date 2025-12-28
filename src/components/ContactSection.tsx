import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Download } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kavuluruabhinav.28@gmail.com',
      href: 'mailto:kavuluruabhinav.28@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6303732572',
      href: 'tel:+916303732572',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Abhinavkavuluru',
      username: '@Abhinavkavuluru',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhinav-kavuluru-5147482a1',
      username: 'Abhinav Kavuluru',
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-secondary/20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-hero-gradient opacity-50" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">06. Contact</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-elevated card-hover p-4 flex items-center gap-3"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6 border-t border-border"
            >
              <p className="text-sm text-muted-foreground mb-4">Download my resume for more details</p>
              <a
                href="/Abhinav_Resume.pdf"
                download
                className="btn-primary inline-flex"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-elevated p-8 md:p-10 text-center flex flex-col justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
              <Send className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how I can bring value to your team or project.
            </p>
            <a
              href="mailto:kavuluruabhinav.28@gmail.com"
              className="btn-primary w-full justify-center"
            >
              <Mail className="w-4 h-4" />
              Send me an Email
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Typically responds within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
