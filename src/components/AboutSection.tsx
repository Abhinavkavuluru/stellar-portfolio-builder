import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Expertise',
    description: 'Deep knowledge in TensorFlow, PyTorch, and building intelligent systems',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable applications with Python, React, Flask, and modern technologies',
  },
  {
    icon: Rocket,
    title: 'Problem Solver',
    description: 'Strong foundation in DSA and CS fundamentals with proven problem-solving abilities',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Experience working in agile environments delivering real-world projects',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hero-gradient opacity-50" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital Experiences with{' '}
            <span className="gradient-text">AI & Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Software Engineer</span> with a strong focus on 
              <span className="text-primary"> Artificial Intelligence</span>, 
              <span className="text-primary"> Machine Learning</span>, and 
              <span className="text-primary"> Full Stack Development</span>. Currently pursuing my B.E. in 
              Information Technology at MVSRC Engineering College with a CGPA of 9.19.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an <span className="text-foreground font-medium">AI Intern at i95Dev</span>, I'm contributing to 
              real-world projects in an agile environment, building bridges between platforms like Shopify and Laravel, 
              developing custom n8n nodes for eCommerce automation, and creating AI-powered chatbots using MCP architecture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans from building neural networks for <span className="text-foreground font-medium">brain tumor detection</span> to 
              creating full-stack platforms that connect farmers with buyers. I thrive on solving complex problems 
              and turning innovative ideas into impactful software solutions.
            </p>

            {/* Tech Stack Preview */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Primary Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'React', 'Flask', 'MySQL', 'Docker'].map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-elevated card-hover p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
