'use client';

import SectionWrapper from '../SectionWrapper';
import EducationCard from './EducationCard';
import { motion } from 'framer-motion';

interface Education {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
  desc: string[];
}

interface Props {
  educationData: Education[];
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const EducationList = ({ educationData }: Props) => {
  const viewportOpt = { once: false, amount: 0.1 };

  return (
    <SectionWrapper id="education" className="min-h-screen">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpt}
      >
        <h2 className="text-5xl font-bold text-center mb-10">
          Educa<span className="text-violet-600">tion</span>
        </h2>

        <div className="relative lg:container mx-auto lg:w-5/6 2xl:w-3/4">
          <div className="relative wrap overflow-hidden p-4 md:py-12">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute left-[22px] md:left-1/2 h-full origin-top
                        border border-gray-300 dark:border-grey-800"
            />

            {educationData.map((e, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="mb-16 flex items-start w-full relative">
                  {/* Mobile dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="
                      md:hidden absolute left-[14px] top-5
                      w-4 h-4 rounded-full bg-white dark:bg-grey-900
                      border-4 border-violet-500
                    "
                  />

                  {/* Mobile card */}
                  <div className="md:hidden w-full pl-10">
                    <EducationCard {...e} index={i} />
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:flex md:w-full justify-between items-start">
                    {/* Left card */}
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:w-1/2 md:pr-10 relative"
                      >
                        <div
                          className="
                            absolute top-5 -right-[35px]
                            w-4 h-4 rounded-full bg-white dark:bg-grey-900
                            border-4 border-violet-500
                          "
                        />
                        <EducationCard {...e} index={i} />
                      </motion.div>
                    ) : (
                      <div className="hidden md:block md:w-1/2"></div>
                    )}

                    {/* Right card */}
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:w-1/2 md:pl-10 relative"
                      >
                        <div
                          className="
                            absolute top-5 -left-[35px]
                            w-4 h-4 rounded-full bg-white dark:bg-grey-900
                            border-4 border-violet-500
                          "
                        />
                        <EducationCard {...e} index={i} />
                      </motion.div>
                    ) : (
                      <div className="hidden md:block md:w-1/2"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default EducationList;
