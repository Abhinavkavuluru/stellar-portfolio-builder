import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowRight, Brain, Leaf, Waves, TrendingUp } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'AgriConnect',
    subtitle: 'Contract Farming Platform',
    description: 'A web-based platform that facilitates secure agreements between farmers and buyers, bridging the gap in agricultural commerce.',
    icon: Leaf,
    problem: 'Farmers struggle to find reliable buyers and negotiate fair prices.',
    solution: 'Built a comprehensive platform with Flask and MySQL enabling secure contract management and price negotiation.',
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript'],
    github: 'https://github.com/Abhinavkavuluru',
    color: 'accent',
  },
  {
    number: '02',
    title: 'NEURO ALERT',
    subtitle: 'Brain Tumor Detection',
    description: 'AI-powered medical imaging system that detects brain tumors from MRI scans using deep learning for early diagnosis.',
    icon: Brain,
    problem: 'Manual MRI analysis is time-consuming and prone to human error.',
    solution: 'CNN-based deep learning system with advanced preprocessing and multi-class classification.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    github: 'https://github.com/Abhinavkavuluru',
    color: 'primary',
  },
  {
    number: '03',
    title: 'Underwater Restoration',
    subtitle: 'Image Enhancement',
    description: 'Deep learning pipeline for restoring degraded underwater images using Residual Networks with Efficient Channel Attention.',
    icon: Waves,
    problem: 'Underwater images suffer from low contrast and color distortion.',
    solution: 'Implemented ResNet with ECA mechanism for superior image restoration.',
    tech: ['Python', 'TensorFlow', 'ResNet', 'Deep Learning'],
    github: 'https://github.com/Abhinavkavuluru',
    color: 'accent',
  },
  {
    number: '04',
    title: 'Churn Prediction',
    subtitle: 'Telecom ML Model',
    description: 'Machine learning model predicting customer churn in telecom, enabling proactive retention strategies.',
    icon: TrendingUp,
    problem: 'Identifying at-risk customers manually is inefficient.',
    solution: 'Predictive modeling with feature engineering and logistic regression.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    github: 'https://github.com/Abhinavkavuluru',
    color: 'primary',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative bg-card">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="font-mono text-primary text-sm tracking-wider">04 / PROJECTS</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4">
              Featured <span className="brutal-underline">Work</span>
            </h2>
          </div>
          <a 
            href="https://github.com/Abhinavkavuluru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <span>View All on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Projects grid - unique layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bento-card relative overflow-hidden">
                {/* Large number background */}
                <span className="project-number">{project.number}</span>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 lg:w-1/3">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <project.icon className={`w-7 h-7 ${
                          project.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Description and details */}
                    <div className="lg:w-2/3 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div>
                          <span className="text-xs font-mono text-primary uppercase tracking-wider">Problem</span>
                          <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                        </div>
                        <div>
                          <span className="text-xs font-mono text-primary uppercase tracking-wider">Solution</span>
                          <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="skill-pill text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;