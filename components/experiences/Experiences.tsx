'use client';

import { experience } from '@/types/main';
import SectionWrapper from '../SectionWrapper';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

interface Props {
  experienceData: experience[];
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeInOut' },
  },
};

const ExperienceList = ({ experienceData }: Props) => {
  const experiences = [...experienceData].reverse();
  const viewportOpts = { once: true, amount: 0.15 };

  return (
    <SectionWrapper id="experience" className="px-4 md:px-0 pb-16 md:pb-24 md:mx-6 lg:mx-auto">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpts}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-10">
          Exper<span className="text-violet-600">ience</span>
        </h2>

        <div className="relative lg:container mx-auto lg:w-5/6 2xl:w-3/4">
          <div className="relative wrap overflow-hidden pt-4 md:pt-24 -mt-4 md:-mt-24">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hidden md:block absolute left-[22px] md:left-1/2 h-full origin-top
                border border-gray-300 dark:border-grey-800"
            />

            {experiences.map((e, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className={`${i === experiences?.length -1 ? '' : 'mb-6 md:mb-16'} flex items-start w-full relative`}>
                  {/* MOBILE DOT */}
                  {/* <div
                    className="
                      hidden md:block absolute left-[14px] top-5
                      w-4 h-4 rounded-full bg-white dark:bg-grey-900
                      border-4 border-violet-500
                    "
                  /> */}

                  {/* MOBILE CARD */}
                  <div className="md:hidden w-full md:pl-10">
                    <ExperienceCard {...e} index={i} />
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden md:flex md:w-full justify-between items-start">
                    {/* LEFT CARD */}
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55 }}
                        className="md:w-1/2 md:pr-10 relative"
                      >
                        <div
                          className="
                            absolute top-5 -right-[9px]
                            w-4 h-4 rounded-full bg-white dark:bg-grey-900
                            border-4 border-violet-500
                          "
                        />
                        <ExperienceCard {...e} index={i} />
                      </motion.div>
                    ) : (
                      <div className="hidden md:block md:w-1/2"></div>
                    )}

                    {/* RIGHT CARD */}
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55 }}
                        className="md:w-1/2 md:pl-10 relative"
                      >
                        <div
                          className="
                            absolute top-5 -left-[9px]
                            w-4 h-4 rounded-full bg-white dark:bg-grey-900
                            border-4 border-violet-500
                          "
                        />
                        <ExperienceCard {...e} index={i} />
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

export default ExperienceList;
