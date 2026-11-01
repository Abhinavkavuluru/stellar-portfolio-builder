import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming & Web Development',
    description: 'Building end-to-end web applications',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'Flask'],
  },
  {
    icon: Database,
    title: 'Backend, Databases & Integrations',
    description: 'APIs, data sync & eCommerce platforms',
    skills: ['FastAPI', 'REST APIs', 'GraphQL APIs', 'PostgreSQL', 'Supabase', 'MySQL', 'Prisma', 'Message Queues', 'Webhooks', 'Shopify App Dev'],
  },
  {
    icon: Brain,
    title: 'Machine Learning, AI & DevOps',
    description: 'Intelligent systems & deployment',
    skills: ['Claude API', 'LLM Function Calling', 'RAG', 'Embeddings', 'pgvector', 'Prompt Engineering', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Docker', 'GitHub Actions', 'Jenkins', 'Git'],
  },
];

const stats = [
  { value: '9.19', label: 'CGPA' },
  { value: '1+', label: 'Years Experience' },
  { value: '6+', label: 'Major Projects' },
  { value: '6', label: 'Certifications' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/[0.02]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-10">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">02 — Skills &amp; Technologies</span>
            <div className="editorial-line mt-4" />
          </motion.div>

          {/* Right: heading + description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              My Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A comprehensive toolkit spanning AI/ML, full-stack development, and DevOps
            </p>
          </motion.div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-editorial rounded-xl p-6 flex flex-col gap-5"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Title + Description */}
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card-editorial rounded-xl p-6 text-center">
              <div className="font-heading text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
