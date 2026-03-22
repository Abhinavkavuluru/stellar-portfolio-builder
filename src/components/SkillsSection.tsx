import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Brain, 
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Web Development',
    description: 'Building end-to-end web applications',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js', 'Flask'],
    color: 'primary',
  },
  {
    icon: Database,
    title: 'Backend, Databases & Integrations',
    description: 'APIs, data sync & eCommerce platforms',
    skills: ['MySQL', 'PostgreSQL', 'REST APIs', 'GraphQL APIs', 'Async Processing', 'Message Queues', 'Shopify App Dev', 'PostHog'],
    color: 'accent',
  },
  {
    icon: Brain,
    title: 'Machine Learning, AI & DevOps',
    description: 'Intelligent systems & deployment',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'Deep Learning', 'LLMs & Gen AI', 'OpenCV', 'Docker', 'CI/CD', 'Git'],
    color: 'primary',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02. Skills & Technologies</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My Technical{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit spanning AI/ML, full-stack development, and DevOps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover p-6"
            >
              <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center mb-4`}>
                <category.icon className={`w-6 h-6 text-${category.color}`} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '9.19', label: 'CGPA' },
            { number: '4+', label: 'Major Projects' },
            { number: '3+', label: 'Certifications' },
            { number: '5+', label: 'Technologies' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 card-elevated">
              <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
