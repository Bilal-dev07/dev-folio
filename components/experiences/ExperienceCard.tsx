'use client';

import { MdWork, MdLocationOn, MdCalendarMonth } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  index: number;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  desc: string[];
  stack?: string[];
  color?: string;
}

const ExperienceCard = ({
  index,
  company,
  position,
  location = 'Lahore, Pakistan',
  startDate,
  endDate,
  desc,
  stack = [],
  color = 'violet',
}: Props) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
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
      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-violet-50 dark:bg-violet-900/30 rounded-br-full opacity-40"></div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-1">{position}</h3>

      {/* Company */}
      <p className="text-gray-600 dark:text-gray-300 font-medium flex items-center gap-2">
        <MdWork className="text-gray-500" />
        {company}
      </p>

      {/* Details */}
      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mt-2">
        <div className="flex items-center gap-1">
          <MdCalendarMonth />
          {startDate} - {endDate}
        </div>
        <div className="flex items-center gap-1">
          <MdLocationOn />
          {location}
        </div>
      </div>

      {/* Color Bar */}
      <div
        className={`h-[3px] w-full mt-4 ${
          color === 'orange' ? 'bg-orange-500' : 'bg-violet-500'
        }`}
      ></div>

      {/* Bullet Points */}
      <ul className="mt-4 space-y-2 text-[15px] text-gray-600 dark:text-gray-300">
        {desc.map((d, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">↗</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {stack.map((t, i) => (
          <span
            key={i}
            className="
              px-3 py-1.5 text-sm font-medium
              rounded-full
              bg-blue-50 dark:bg-gray-700
              text-gray-700 dark:text-gray-100
              border border-blue-200 dark:border-gray-600
              shadow-sm
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-violet-100 dark:bg-violet-900/20 rounded-tl-full opacity-40"></div>
    </motion.div>
  );
};

export default ExperienceCard;
