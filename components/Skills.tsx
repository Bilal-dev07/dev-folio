'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skill } from '@/types/main';
import { Code2, Layers, Database, Wrench, Link2, Bot } from 'lucide-react';

interface Props {
  skillData: skill[];
}

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeInOut' },
  },
};

// FIXED: smooth, mobile-safe stagger
const cardContainerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// FIXED: lighter animation so mobile doesn’t drop frames
const cardItemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

// FIXED: once true prevents repeated re-renders
const viewportOpts = { once: true, amount: 0.15 };

const Skills = ({ skillData }: Props) => {
  const grouped = skillData.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, skill[]>);

  const config: Record<string, { icon: JSX.Element; underline: string }> = {
    Frontend: {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      underline: 'bg-cyan-400',
    },
    Backend: {
      icon: <Layers className="w-5 h-5 text-green-500" />,
      underline: 'bg-green-400',
    },
    Database: {
      icon: <Database className="w-5 h-5 text-purple-500" />,
      underline: 'bg-purple-400',
    },
    'DevOps & Tools': {
      icon: <Wrench className="w-5 h-5 text-orange-500" />,
      underline: 'bg-orange-400',
    },
    'APIs & Services': {
      icon: <Link2 className="w-5 h-5 text-pink-500" />,
      underline: 'bg-pink-400',
    },
    'AI Development': {
      icon: <Bot className="w-5 h-5 text-blue-500" />,
      underline: 'bg-blue-400',
    },
  };

  return (
    <SectionWrapper
      id="skills"
      className="pb-16 md:pb-24 bg-gray-50 dark:bg-grey-900"
    >
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpts}
      >
        <motion.h2
          variants={sectionVariant}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Tech <span className="text-violet-600">Stack</span>
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to build exceptional digital experiences.
        </p>

        {/* MAIN GRID */}
        <motion.div
          variants={cardContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportOpts}
          className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 min-h-[200px]">
            {Object.entries(grouped).map(([category, items], idx) => (
              <motion.div
                key={idx}
                variants={cardItemVariant}
                className="w-full flex"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                  className="
                    transform-gpu will-change-transform
                    rounded-2xl p-7 bg-white dark:bg-grey-800 
                    shadow-[0_3px_10px_rgb(0,0,0,0.07)] 
                    border border-gray-200 dark:border-grey-700
                  "
                >
                  <div className="flex items-center gap-2 mb-3">
                    {config[category]?.icon}
                    <h3 className="text-lg font-semibold">{category}</h3>
                  </div>

                  <div
                    className={`h-1 w-full rounded-full mb-5 ${config[category]?.underline}`}
                  />

                  <div className="flex flex-wrap gap-3">
                    {items.map((item, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1 text-sm font-medium
                          rounded-xl bg-blue-50 text-gray-800
                          dark:bg-gray-700 dark:text-gray-100
                          border border-blue-200 dark:border-gray-600
                          shadow-sm
                        "
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* STATS GRID */}
          <motion.div
            variants={cardContainerVariant}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
            className="grid md:grid-cols-3 gap-6 mt-6 md:mt-16"
          >
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '20+', label: 'Technologies Mastered' },
              { value: '10+', label: 'Projects Completed' },
            ].map((stat, i) => (
              <motion.div key={i} variants={cardItemVariant} className="w-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                  className="
                    transform-gpu will-change-transform
                    text-center border rounded-2xl p-10 
                    bg-white dark:bg-grey-800 
                    border-gray-200 dark:border-grey-700
                    shadow-[0_3px_10px_rgb(0,0,0,0.07)]
                  "
                >
                  <h3 className="text-4xl font-bold text-violet-600">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
