import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'i95Dev',
    role: 'Software Engineer I',
    duration: 'July 2025 – Present',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    description: 'Building scalable eCommerce and ERP integrations with a focus on Shopify-based B2B platforms, API development, and AI-driven automation.',
    projects: [
      {
        name: 'i95dev B2B Portal',
        description: 'Designed and implemented a scalable bidirectional integration between Shopify and a Laravel-based B2B portal. Enabled the platform to act as a centralized hub for managing e-commerce and ERP data across products, orders, companies, users, customers, and pricing. Developed asynchronous message queue systems for reliable real-time data synchronization using PostgreSQL and MySQL.',
      },
      {
        name: 'Shopify AI Agent',
        description: 'Built a Shopify AI agent using Model Context Protocol (MCP) to convert natural language inputs into automated Shopify operations. Used the Shopify GraphQL API for product creation, order management, inventory updates, and store configuration. Implemented LLM orchestration with structured tool schemas for automated backend task execution.',
      },
    ],
    technologies: ['Python', 'Shopify GraphQL API', 'Laravel', 'PostgreSQL', 'MySQL', 'MCP', 'LLMs', 'Message Queues'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">03 — Experience</span>
            <div className="editorial-line mt-4" />
          </motion.div>

          {/* Right content */}
          <div className="lg:col-span-9 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span>{exp.duration}</span>
                    <span className="mx-2">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-[1.8] mb-8">{exp.description}</p>

                {/* Tech strip */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">{tech}</span>
                  ))}
                </div>

                {/* Projects */}
                <div className="space-y-6 pl-6 border-l-2 border-primary/20">
                  {exp.projects.map((project, pIndex) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + pIndex * 0.1 }}
                    >
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {project.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-[1.8]">
                        {project.description}
                      </p>
                    </motion.div>
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

export default ExperienceSection;
