import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">01 — About</span>
            <div className="editorial-line mt-4" />
          </motion.div>

          {/* Right content */}
          <div className="lg:col-span-9 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              An engineer who builds at the intersection of{' '}
              <span className="gradient-text">backend systems, AI, and scale</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground leading-[1.8]"
              >
                I'm a Software Engineer at i95Dev. I build AI features for a financial audit and
                diligence platform (LLM function calling, RAG with page-level citations, human-in-the-loop
                workflows) and a multi-tenant Shopify B2B commerce app that syncs orders, pricing and
                customers with ERPs like Dynamics 365 and NetSuite.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground leading-[1.8]"
              >
                B.E. in Information Technology from MVSREC (9.19 CGPA). My expertise spans 
                from AI-driven automation, deep learning for medical imaging, to blockchain-powered 
                platforms — always solving complex problems with elegant engineering.
              </motion.p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
