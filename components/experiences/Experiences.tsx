import { Card } from '@/components/experiences/card';
import { Badge } from '@/components/experiences/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  color: string;
  stack: string[];
  desc: string[];
}

export interface ExperienceProps {
  experienceData: ExperienceItem[];
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export const Experience = ({ experienceData }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-violet-600">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, innovation, and delivering exceptional results
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="p-6 md:p-8 border-border/50 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg ${
                          exp.color === 'orange'
                            ? 'bg-orange-500/10'
                            : 'bg-violet-500/10'
                        } mt-1`}
                      >
                        <Briefcase
                          className={`w-5 h-5 ${
                            exp.color === 'orange'
                              ? 'text-orange-500'
                              : 'text-violet-500'
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <Badge
                            variant="default"
                            className="inline-flex items-center gap-2 bg-violet-600 text-white px-3 py-1 rounded-md shadow hover:opacity-95 transition"
                          >
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p
                      className={`font-semibold mb-1 ${
                        exp.color === 'orange'
                          ? 'text-orange-500'
                          : 'text-violet-500'
                      }`}
                    >
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.stack.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className={`text-xs ${
                        exp.color === 'orange'
                          ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                          : 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2">
                  {exp.desc.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className={`mt-1.5 ${
                          exp.color === 'orange'
                            ? 'text-orange-500'
                            : 'text-violet-500'
                        }`}
                      >
                        •
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
