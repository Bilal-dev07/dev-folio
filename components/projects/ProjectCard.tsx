'use client';

import { project } from '@/types/main';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeInOut' },
  },
};

const Project = ({
  name,
  image,
  subtitle,
  description,
  achievements,
  technologies,
  links,
}: project) => {
  return (
    <div
      // variants={cardVariants}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: false, amount: 0.01 }} // 🔥 better for mobile
      // whileHover={{ y: -8 }}
      // transition={{
      //   type: 'spring',
      //   stiffness: 220,
      //   damping: 18,
      // }}
      className="
        relative
        bg-white dark:bg-grey-800
        shadow-md border rounded-2xl
        p-4 md:p-5 flex flex-col gap-4 md:gap-5
        overflow-hidden
        transform-gpu will-change-transform
        h-full
      "
    >
      {/* Decorative Shape */}
      <div
        className="
          absolute bottom-0 right-0
          w-24 h-24 md:w-28 md:h-28
          bg-violet-100 dark:bg-violet-900/20
          rounded-tl-full
          opacity-40 pointer-events-none
        "
      />

      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          alt={name}
          width={1200}
          height={800}
          className="w-full h-44 md:h-56 object-cover rounded-xl"
          src={image}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl font-semibold leading-snug">
          {name}
        </h3>

        {subtitle && (
          <Link
            href={links.visit || '#'}
            target="_blank"
            className="text-blue-600 text-sm underline hover:text-blue-800"
          >
            {subtitle}
          </Link>
        )}

        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="mt-1 md:mt-2">
          <h4 className="text-md font-semibold mb-2 flex items-center gap-2">
            <span className="text-blue-600">◎</span> Key Achievements
          </h4>

          <ul className="flex flex-col gap-3">
            {achievements.map((ach, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm"
              >
                <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mt-0.5">
                  <FaCheckCircle size={10} />
                </div>
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mt-2">
          <h4 className="text-md font-semibold mb-2">Technologies</h4>

          <div className="flex flex-wrap gap-2 w-full">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="
                  px-3 py-1.5 text-xs md:text-sm font-medium
                  rounded-full
                  bg-blue-50 dark:bg-gray-700
                  text-gray-700 dark:text-gray-100
                  border border-blue-200 dark:border-gray-600
                  shadow-sm
                  whitespace-nowrap
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
