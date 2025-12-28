import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillData = {
  'Languages & Web': ['Python', 'JavaScript', 'C', 'HTML5', 'CSS3', 'React.js', 'Node.js', 'Flask'],
  'AI & Machine Learning': ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'LLMs', 'Gen AI'],
  'Deep Learning': ['CNNs', 'RNNs', 'Transformers', 'Image Processing', 'Neural Networks'],
  'Tools & DevOps': ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'MySQL', 'Power BI', 'Jupyter'],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-card">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">02 / SKILLS</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4">
            Tech <span className="brutal-underline">Stack</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + i * 0.05 }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee of all skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 overflow-hidden border-y-2 border-border py-6"
        >
          <div className="flex gap-8 marquee">
            {[...Object.values(skillData).flat(), ...Object.values(skillData).flat()].map((skill, i) => (
              <span 
                key={`${skill}-${i}`} 
                className="font-heading text-2xl md:text-3xl font-bold text-muted-foreground/30 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;