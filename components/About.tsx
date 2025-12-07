'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

interface Props {
  aboutData: {
    title: string;
    summary: string;
    currentFocus: string[];
    achievements: string[];
  };
}

const headingVariant = {
  hidden: { opacity: 0, x: -35 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const listParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.32, ease: 'easeOut' } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const About = ({ aboutData }: Props) => {
  const { title, summary, currentFocus, achievements } = aboutData;

  const viewportOpts = { once: false, amount: 0.2 };

  return (
    <SectionWrapper
      id="about"
      className="px-4 md:px-0 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900 md:mx-6 lg:mx-auto"
    >
      {/* MAIN HEADING */}
      <motion.h2
        variants={headingVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpts}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        About <span className="text-violet-600">Me</span>
      </motion.h2>

      {/* SUMMARY CARD */}
      <motion.div
        variants={cardVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpts}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { type: 'spring', stiffness: 220, damping: 18 },
        }}
        className="w-full lg:w-10/12 mx-auto"
      >
        <div className="bg-white dark:bg-grey-800 rounded-2xl shadow-lg px-8 py-10 border border-gray-200/60 dark:border-grey-700/50">
          <motion.p
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOpts}
            transition={{ duration: 0.35 }}
            className="text-violet-700 dark:text-violet-400 font-medium text-sm w-fit bg-violet-100/60 dark:bg-violet-900/20 px-3 py-1 rounded mb-4"
          >
            {title}
          </motion.p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15.5px]">
            {summary}
          </p>
        </div>
      </motion.div>

      {/* TWO COLUMNS */}
      <div className="grid md:grid-cols-2 gap-6 w-full lg:w-10/12 mx-auto mt-10">
        {/* CURRENT FOCUS */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportOpts}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { type: 'spring', stiffness: 220, damping: 18 },
          }}
          className="bg-white dark:bg-grey-800 rounded-2xl shadow-md p-7 border border-gray-200/60 dark:border-grey-700/50"
        >
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
            className="text-xl font-semibold mb-3 text-violet-700 dark:text-violet-400"
          >
            Current Focus
          </motion.h3>

          <motion.ul
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
            className="space-y-2"
          >
            {currentFocus.map((item, idx) => (
              <motion.li
                key={idx}
                variants={listItem}
                className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed border-l-4 border-violet-500/60 pl-3"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ACHIEVEMENTS */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportOpts}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { type: 'spring', stiffness: 220, damping: 18 },
          }}
          className="bg-white dark:bg-grey-800 rounded-2xl shadow-md p-7 border border-gray-200/60 dark:border-grey-700/50"
        >
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
            className="text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-400"
          >
            Achievements
          </motion.h3>

          <motion.ul
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
            className="space-y-2"
          >
            {achievements.map((item, idx) => (
              <motion.li
                key={idx}
                variants={listItem}
                className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed border-l-4 border-emerald-500/60 pl-3"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
