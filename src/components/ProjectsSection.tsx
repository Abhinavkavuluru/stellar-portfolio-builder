import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'AgriConnect',
    subtitle: 'Blockchain Contract Farming',
    description: 'A blockchain-powered platform using Ethereum smart contracts for secure, tamper-proof agreements between farmers and buyers.',
    problem: 'Farmers struggle with unreliable buyers and opaque contracts prone to disputes.',
    solution: 'Decentralized platform with Flask, MySQL, and Solidity smart contracts for trustless contract management and on-chain settlements.',
    features: ['Ethereum smart contract execution', 'Tamper-proof blockchain records', 'On-chain price settlement', 'Role-based access control'],
    technologies: ['Python', 'Flask', 'MySQL', 'Solidity', 'Ethereum', 'Web3', 'JavaScript'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: true,
    number: '01',
  },
  {
    title: 'NEURO ALERT',
    subtitle: 'Brain Tumor Detection',
    description: 'AI-powered medical imaging system that detects brain tumors from MRI scans using deep learning for early diagnosis.',
    problem: 'Manual MRI analysis is slow and error-prone, potentially delaying critical diagnoses.',
    solution: 'CNN-based deep learning system with advanced preprocessing, segmentation, and classification using TensorFlow.',
    features: ['MRI preprocessing pipeline', 'Tumor region segmentation', 'Multi-class classification', 'Confidence visualization'],
    technologies: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'NumPy'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: true,
    number: '02',
  },
  {
    title: 'Underwater Restore',
    subtitle: 'Image Restoration AI',
    description: 'Deep learning pipeline for restoring degraded underwater images using Residual Networks with Efficient Channel Attention.',
    problem: 'Underwater images suffer from low contrast, blur, and color distortion due to light scattering.',
    solution: 'ResNet with ECA and SiLU activation for superior color correction and detail recovery.',
    features: ['Residual learning', 'Channel attention mechanism', 'Color correction', 'Real-time processing'],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'ResNet', 'Deep Learning'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: true,
    number: '03',
  },
  {
    title: 'Churn Predictor',
    subtitle: 'ML Customer Analytics',
    description: 'Machine learning model predicting customer churn in telecom, enabling proactive retention strategies.',
    problem: 'Telecom companies lose revenue from undetected at-risk customers.',
    solution: 'Scikit-learn based predictive model with feature engineering and logistic regression.',
    features: ['Behavior analysis', 'Feature engineering', 'Predictive modeling', 'Churn scoring'],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: false,
    number: '04',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">04 — Projects</span>
            <div className="editorial-line mt-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-9"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Selected <span className="gradient-text">Work</span>
            </h2>
          </motion.div>
        </div>

        {/* Featured projects */}
        <div className="space-y-0">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border py-12 md:py-16 group"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Number + Title */}
                <div className="md:col-span-5">
                  <span className="text-[11px] font-mono text-muted-foreground">{project.number}</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mt-1 font-medium">{project.subtitle}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-pill">{tech}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Details */}
                <div className="md:col-span-7 space-y-6">
                  <p className="text-muted-foreground leading-[1.8]">{project.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        <div className="border-t border-border pt-12 mt-4">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-8">Other Notable Work</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.title} className="card-editorial p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-primary mt-1">{project.subtitle}</p>
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag-pill">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Abhinavkavuluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
