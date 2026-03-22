import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

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
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03. Experience</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building real-world solutions and contributing to impactful projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-8" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-6 animate-glow-pulse" />

              <div className="pl-8 md:pl-20">
                {/* Header Card */}
                <div className="card-elevated p-6 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-heading font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Key Projects
                  </h4>
                  {exp.projects.map((project, pIndex) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + pIndex * 0.1 }}
                      className="card-elevated card-hover p-5 ml-4 border-l-2 border-primary/30"
                    >
                      <h5 className="font-heading font-medium text-foreground mb-2">
                        {project.name}
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
