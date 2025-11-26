'use client';

import { project } from '@/types/main';
import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface Props {
  projectsData: project[];
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

// 🔥 More reliable on mobile
const viewportOpts = { once: false, amount: 0.01 };

const Projects = ({ projectsData }: Props) => {
  const [projects] = useState([...projectsData].reverse() as project[]);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen pt-10">
      {/* Title */}
      <motion.h2
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpts}
        className="mt-6 text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Proj<span className="text-violet-600">ects</span>
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={viewportOpts}
        className="
          md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 
          my-4 md:my-12
          grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10
        "
      >
        {projects.map((p: project, i: number) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
