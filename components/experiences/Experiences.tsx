import { Card } from '@/components/experiences/card';
import { Badge } from '@/components/experiences/badge';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
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
                    {/* Position + Icon */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-violet-500" />
                      </div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                    </div>

                    {/* Company + Icon */}
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <Building className="w-5 h-5 text-violet-500" />
                      </div>
                      <p>{exp.company}</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="p-2 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-violet-500" />
                      </div>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Date + Current badge */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="p-2 rounded-lg bg-violet-500/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-violet-500" />
                    </div>
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                    {exp.current && (
                      <Badge className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-md shadow hover:opacity-95 transition">
                        Current
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.stack.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="
                          px-3 py-1 text-sm font-medium
                          rounded-xl bg-blue-50 text-gray-800
                          dark:bg-gray-700 dark:text-gray-100
                          border border-blue-200 dark:border-gray-600
                          shadow-sm
                        "
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
