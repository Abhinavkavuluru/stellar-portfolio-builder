import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Coffee, Rocket } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-pattern" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">01 / ABOUT</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4">
            Who I <span className="brutal-underline">Am</span>
          </h2>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Main bio - spans 2 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2 bento-card">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              I'm a <span className="text-foreground font-semibold">Software Engineer</span> with a passion for 
              building intelligent systems. Currently pursuing B.E. in Information Technology at 
              <span className="text-foreground font-semibold"> MVSRC Engineering College</span> while working as an 
              <span className="text-primary font-semibold"> AI Intern at i95Dev</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in creating end-to-end solutions—from training neural networks for medical imaging 
              to building full-stack platforms that connect real people. My work sits at the intersection of 
              <span className="text-foreground font-semibold"> AI/ML</span>, 
              <span className="text-foreground font-semibold"> clean code</span>, and 
              <span className="text-foreground font-semibold"> impactful design</span>.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div variants={itemVariants} className="bento-card flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div className="font-heading text-4xl font-extrabold text-foreground mb-2">9.19</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">CGPA Score</div>
          </motion.div>

          {/* What I do cards */}
          <motion.div variants={itemVariants} className="bento-card">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">AI & ML</h3>
            <p className="text-sm text-muted-foreground">
              Deep learning, computer vision, and building intelligent systems with TensorFlow & PyTorch.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Full Stack</h3>
            <p className="text-sm text-muted-foreground">
              End-to-end web apps with React, Flask, Node.js, and modern cloud infrastructure.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-card">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Problem Solver</h3>
            <p className="text-sm text-muted-foreground">
              Strong DSA foundation with a knack for tackling complex challenges efficiently.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;