'use client';

import { MdSchool, MdCalendarMonth } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  index: number;
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
  desc: string[];
}

const EducationCard = ({
  index,
  institute,
  degree,
  startDate,
  endDate,
  desc,
}: Props) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.03, translateY: -6 }}
      className="
        rounded-xl bg-white dark:bg-grey-800 shadow-md p-6 md:p-7
        border border-gray-100 dark:border-grey-700
        relative overflow-hidden
        transition-all duration-300 ease-out hover:shadow-xl
      "
    >
      {/* Decorative top */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-violet-50 dark:bg-violet-900/30 rounded-br-full opacity-40"></div>

      {/* Degree title */}
      <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
        <MdSchool className="text-gray-500" />
        {degree}
      </h3>

      {/* Institute */}
      <p className="text-gray-600 dark:text-gray-300 font-medium">
        {institute}
      </p>

      {/* Start - End dates */}
      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mt-2">
        <MdCalendarMonth />
        {startDate} – {endDate}
      </div>

      {/* Color bar */}
      <div className="h-[3px] w-full mt-4 bg-violet-500"></div>

      {/* Bullet points */}
      <ul className="mt-4 space-y-2 text-[15px] text-gray-600 dark:text-gray-300">
        {desc.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">↗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Decorative bottom */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-violet-100 dark:bg-violet-900/20 rounded-tl-full opacity-40"></div>
    </motion.div>
  );
};

export default EducationCard;
