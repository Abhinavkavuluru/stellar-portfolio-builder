import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';

const projects = [
  {
    title: 'AgriConnect – Contract Farming Platform',
    description: 'A web-based platform that facilitates secure agreements between farmers and buyers, bridging the gap in agricultural commerce.',
    problem: 'Farmers often struggle to find reliable buyers and negotiate fair prices, while buyers lack access to verified contract farming options.',
    solution: 'Built a comprehensive platform using Flask and MySQL that enables secure contract management, price negotiation tools, and agreement tracking.',
    features: [
      'Secure contract generation and management',
      'Price negotiation dashboard',
      'User authentication and role-based access',
      'Transaction history and analytics',
    ],
    technologies: ['Python', 'Flask', 'MySQL', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: true,
  },
  {
    title: 'NEURO ALERT – Brain Tumor Detection',
    description: 'An AI-powered medical imaging system that detects brain tumors from MRI scans using deep learning, aiding early diagnosis.',
    problem: 'Manual analysis of MRI scans is time-consuming and prone to human error, potentially delaying critical diagnoses.',
    solution: 'Applied a CNN-based deep learning system with advanced image preprocessing, segmentation, and classification using TensorFlow.',
    features: [
      'MRI image preprocessing pipeline',
      'Tumor region segmentation',
      'Multi-class tumor classification',
      'Confidence score visualization',
    ],
    technologies: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'NumPy'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: true,
  },
  {
    title: 'Underwater Image Restoration',
    description: 'A deep learning pipeline for restoring degraded underwater images using advanced neural network architectures.',
    problem: 'Underwater images suffer from low contrast, blur, and color distortion due to light absorption and scattering in water.',
    solution: 'Implemented a Residual Network with Efficient Channel Attention (ECA) and Sigmoid Linear Unit activation for superior image restoration.',
    features: [
      'Residual learning architecture',
      'Efficient Channel Attention mechanism',
      'Color correction algorithms',
      'Real-time image processing',
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'ResNet', 'Deep Learning'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: true,
  },
  {
    title: 'Customer Churn Prediction',
    description: 'A machine learning model that predicts customer churn in the telecom industry, enabling proactive retention strategies.',
    problem: 'Telecom companies lose significant revenue due to customer churn, and identifying at-risk customers manually is inefficient.',
    solution: 'Analyzed customer data using Scikit-learn and logistic regression, with improved accuracy through feature engineering and data preprocessing.',
    features: [
      'Customer behavior analysis',
      'Feature engineering pipeline',
      'Predictive modeling with ML',
      'Churn probability scoring',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression', 'Data Analysis'],
    github: 'https://github.com/Abhinavkavuluru',
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(45deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">04. Projects</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my expertise in AI/ML and full-stack development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated card-hover overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Folder className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-heading text-xl font-semibold text-center mb-6">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={project.title} className="card-elevated card-hover p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Folder className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Abhinavkavuluru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
