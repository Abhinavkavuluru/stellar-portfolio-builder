import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'i95Dev',
    role: 'Software Engineer I',
    duration: 'July 2025 – Present',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    description: 'Building AI-powered and eCommerce products end to end, from database design and APIs to user interfaces, third-party integrations and deployment.',
    projects: [
      {
        name: 'AI Diligence & Audit Platform (Client: GateCity Advisory)',
        description: 'Built the Media Audit module end to end: ledger import, statistical sampling (random, top-value, monetary-unit), test design, evidence-linked results, client request lists and PDF reports. Developed an AI audit assistant using LLM function calling, where every AI suggestion is confirmed by a user before data changes, and an AI test designer that turns plain-English audit checks into runnable flowchart tests. Built document Q&A (RAG) with hybrid vector and keyword search that highlights the exact answer on the source page, automatic filing of AI-classified documents with a human review queue, and Microsoft Entra ID single sign-on with role-based access. Cut the audit page load from 12s to 1.3s.',
      },
      {
        name: 'B2B Commerce Platform: Shopify App & B2B Portal',
        description: 'Built two-way sync between Shopify, the B2B portal and ERPs (Dynamics 365 Business Central, NetSuite) for products, orders, companies, customers, pricing and invoices using queues with retries. Built the B2B pricing engine (price lists, tier and volume pricing, customer-group discounts) shown on the storefront through a Shopify theme app extension, plus B2B checkout with purchase orders and credit-limit checks, multi-currency support, subscription billing and merchant onboarding. Moved the Shopify integration from REST to GraphQL, cutting API calls for 250 orders from 250 to 3, and merged two databases into one shared MySQL schema.',
      },
    ],
    technologies: ['Python', 'FastAPI', 'TypeScript', 'Next.js', 'PostgreSQL', 'pgvector', 'Claude API', 'RAG', 'Node.js', 'React Router', 'Shopify GraphQL API', 'MySQL', 'Prisma'],
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
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">03 — Experience</span>
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
