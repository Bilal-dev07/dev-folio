import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: 'Professional Certifications',
    desc: 'Recognized credentials demonstrating expertise in cloud technologies, DevOps practices, AI tooling, and modern development workflows.',
    metrics: [
      'AWS Certified Developer – Associate',
      'DevOps Foundations: CI/CD',
      'ChatGPT Prompt Engineering for Developers',
      'Docker Foundations Professional Certificate',
    ],
    color: 'from-blue-400 to-blue-600',
    bullet: 'bg-blue-500',
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: 'Project Management Excellence',
    desc: 'Successfully led multiple projects improving team efficiency and ensuring on-time deliveries.',
    metrics: [
      'Improved cross-team collaboration',
      '100% on-time delivery',
      '20% team efficiency boost',
      '3 concurrent projects',
    ],
    color: 'from-pink-400 to-pink-600',
    bullet: 'bg-pink-500',
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: 'Performance Optimization',
    desc: 'Delivered significant performance improvements across multiple systems and products.',
    metrics: [
      '50% performance increase',
      '40% API response improvement',
      '30% UI optimization',
    ],
    color: 'from-green-400 to-green-600',
    bullet: 'bg-green-500',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Team Leadership',
    desc: 'Led engineering teams and mentored junior developers while managing client expectations.',
    metrics: [
      '2-person team leadership',
      'Junior mentoring',
      'Client project management',
    ],
    color: 'from-purple-400 to-purple-600',
    bullet: 'bg-purple-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function KeyAchievementsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-grey-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Key <span className="text-violet-600">Achievements</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Notable accomplishments that demonstrate impact and innovation.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-white dark:bg-grey-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl flex flex-col h-full overflow-hidden"
            >
              {/* ALWAYS-VISIBLE ACCENT CORNER */}
              <div
                className={`absolute top-0 left-0 w-24 h-24 rounded-br-full bg-gradient-to-br ${item.color} opacity-40 z-0`}
              ></div>

              {/* Icon (stays above corner) */}
              <div
                className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} shadow`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="mt-4 flex-1 flex flex-col relative z-10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-1">
                  {item.desc}
                </p>

                {/* Metrics list */}
                <ul className="mt-4 space-y-2">
                  {item.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${item.bullet}`}
                      ></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {metric}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom bar */}
              <div className="mt-6 relative z-10">
                <div
                  className={`h-1 w-full rounded-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
