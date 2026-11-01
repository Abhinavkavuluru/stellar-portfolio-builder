import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
  {
    institution: 'Maturi Venkata Subba Rao Engineering College',
    degree: 'B.E. Information Technology',
    grade: 'CGPA: 9.19',
    duration: 'Graduation: June 2025',
    location: 'Hyderabad, Telangana',
  },
  {
    institution: 'Sri Chaitanya Junior Kalasala',
    degree: 'Intermediate — Science (MPC)',
    grade: 'Percentage: 95.8%',
    duration: 'June 2021',
    location: 'Hyderabad, Telangana',
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'Secondary Education',
    grade: 'CGPA: 10.0',
    duration: 'April 2019',
    location: 'Hyderabad, Telangana',
  },
];

const certifications = [
  { name: 'Claude Code in Action', issuer: 'Anthropic', period: 'May 2026' },
  { name: 'Building with the Claude API', issuer: 'Anthropic', period: 'May 2026' },
  { name: 'AWS AI/ML Virtual Internship', issuer: 'AICTE-Eduskills', period: 'May – Jul 2023' },
  { name: 'Google AI/ML Virtual Internship', issuer: 'AICTE-Eduskills', period: 'Apr – Jun 2024' },
  { name: 'AWS Data Analytics', issuer: 'Amazon Web Services', period: 'Certification' },
  { name: 'AWS Machine Learning', issuer: 'Amazon Web Services', period: 'Certification' },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">05 — Education</span>
            <div className="editorial-line mt-4" />
          </motion.div>

          {/* Right content */}
          <div className="lg:col-span-9">
            {/* Education */}
            <div className="space-y-0 mb-16">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-t border-border py-8 grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{edu.institution}</h3>
                    <p className="text-primary text-sm mt-1">{edu.degree}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{edu.grade}</span>
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-foreground mb-6">
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="card-editorial p-5">
                    <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary mt-2">{cert.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
