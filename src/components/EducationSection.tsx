import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const education = [
  {
    institution: 'Maturi Venkata Subba Rao Engineering College',
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    grade: 'CGPA: 9.19',
    duration: 'Graduation: June 2025',
    location: 'Hyderabad, Telangana',
    current: true,
  },
  {
    institution: 'Sri Chaitanya Junior Kalasala',
    degree: 'Intermediate',
    field: 'Science (MPC)',
    grade: 'Marks: 958',
    duration: 'Completed: June 2021',
    location: 'Hyderabad, Telangana',
    current: false,
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'Schooling',
    field: 'Secondary Education',
    grade: 'CGPA: 10.0',
    duration: 'Completed: April 2019',
    location: 'Hyderabad, Telangana',
    current: false,
  },
];

const certifications = [
  {
    name: 'Accenture Primer Training',
    issuer: 'Accenture',
    duration: 'Oct 2025 - Nov 2025',
    type: 'Training Program',
  },
  {
    name: 'AWS AI/ML Virtual Internship',
    issuer: 'AICTE-Eduskills',
    duration: 'May 2023 – Jul 2023',
    type: 'Virtual Internship',
  },
  {
    name: 'Google AI/ML Virtual Internship',
    issuer: 'AICTE-Eduskills',
    duration: 'Apr 2024 – Jun 2024',
    type: 'Virtual Internship',
  },
  {
    name: 'AWS Data Analytics',
    issuer: 'Amazon Web Services',
    duration: 'Certification',
    type: 'AWS Certification',
  },
  {
    name: 'AWS Machine Learning',
    issuer: 'Amazon Web Services',
    duration: 'Certification',
    type: 'AWS Certification',
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">05. Education & Certifications</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Academic{' '}
            <span className="gradient-text">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My educational journey and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl font-semibold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                  <div className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 ${
                    edu.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground'
                  }`} />

                  <div className="card-elevated card-hover p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {edu.institution}
                        </h4>
                        <p className="text-primary font-medium">{edu.degree} in {edu.field}</p>
                      </div>
                      {edu.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl font-semibold mb-8 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-accent" />
              Certifications & Courses
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated card-hover p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full whitespace-nowrap">
                      {cert.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.duration}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
