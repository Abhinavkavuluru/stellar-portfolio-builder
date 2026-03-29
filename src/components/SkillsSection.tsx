import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages & Frontend',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'],
  },
  {
    title: 'Backend & Integrations',
    skills: ['Flask', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MySQL', 'Shopify App Dev', 'Message Queues', 'PostHog'],
  },
  {
    title: 'AI / ML & DevOps',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Deep Learning', 'LLMs & Gen AI', 'OpenCV', 'Docker', 'CI/CD', 'Git'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/[0.02]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">02 — Skills</span>
            <div className="editorial-line mt-4" />
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              A comprehensive toolkit spanning full-stack development, AI/ML, and cloud infrastructure.
            </p>
          </motion.div>

          {/* Right: Skill blocks */}
          <div className="lg:col-span-9 space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              >
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-foreground mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
