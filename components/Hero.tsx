import Image from 'next/image';
import { useTheme } from 'next-themes';
import Typewriter from 'typewriter-effect';
import { main } from '@/types/main';
import { motion } from 'framer-motion';

interface HeroProps {
  mainData: main;
}

const Hero = ({ mainData }: HeroProps) => {
  const { theme } = useTheme();
  const {
    name,
    gmail,
    linkedIn,
    github,
    phone,
    location,
    coffeeLabel,
    opportunity,
    titles,
    heroImage,
    shortDesc,
    techStackImages,
    tags,
  } = mainData;

  const [firstName, ...rest] = (name || 'Your Name').split(' ');
  const lastPart = rest.join(' ');

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center w-full mx-auto overflow-hidden py-16 lg:py-28 md:pb-10 ${
        theme === 'dark' ? 'bg-grey-900' : ''
      }`}
    >
      {/* BG Image */}
      <div className="absolute -z-10 inset-0">
        <Image
          src="/herobgc.jpg"
          fill
          className="object-cover object-bottom"
          loading="lazy"
          quality={80}
          alt=""
        />
      </div>

      {/* prevent mobile overflow */}
      <div className="container mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="flex flex-col-reverse items-center lg:flex-row items-start gap-12 lg:gap-24 w-full overflow-hidden">
          {/* LEFT */}
          <div className="lg:w-1/2 max-w-2xl w-full overflow-hidden">
            <div className="flex items-center gap-3 mb-6 max-w-full overflow-hidden">
              <span className="inline-flex items-center gap-2 bg-white/60 dark:bg-black/40 text-sm rounded-full py-1 px-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 block" />
                <span className="text-xs truncate max-w-[180px] sm:max-w-none">
                  {opportunity}
                </span>
              </span>
            </div>

            {/* HERO NAME FIXED */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 break-words">
              {firstName}{' '}
              <span className="text-violet-600 break-words">{lastPart}</span>
            </h1>

            {/* TITLES FIXED */}
            <div
              className="flex items-center gap-3 mb-6 w-full max-w-xs sm:max-w-md md:max-w-lg overflow-hidden"
              style={{ minHeight: '2.5rem' }}
            >
              <Typewriter
                options={{
                  strings: titles || ['Senior Software Engineer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 50,
                  wrapperClassName:
                    'text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl font-medium break-words',
                  cursorClassName: 'text-violet-600',
                }}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl text-sm sm:text-base">
              {shortDesc}
            </p>

            {/* location + coffee */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-8">
              <div className="flex items-center gap-2 min-w-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-violet-600"
                >
                  <path d="M12 2C8.7 2 6 4.7 6 8c0 4.4 6 12 6 12s6-7.6 6-12c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5s2.5 1.1 2.5 2.5S13.4 10.5 12 10.5z" />
                </svg>
                <span className="truncate max-w-[200px]">{location}</span>
              </div>

              <div className="flex items-center gap-2 min-w-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-600"
                >
                  <path d="M3 8h13v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                  <path d="M16 8h1a3 3 0 1 1 0 6h-1" />
                  <path d="M7 2h.01M11 2h.01M15 2h.01" />
                </svg>
                <span className="truncate max-w-[200px]">{coffeeLabel}</span>
              </div>
            </div>

            {/* BUTTONS + ICONS kept same */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 mb-8 w-full">
              <div className="mb-3 sm:mb-0">
                <a
                  href="/Awais_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-violet-600 text-white px-5 py-2 rounded-md shadow hover:opacity-95 transition"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* GitHub */}
                {[
                  {
                    label: 'github',
                    onClick: () => window.open(github, '_blank'),
                    svg: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 .5C5.73.5.83 5.4.83 11.67c0 4.86 3.16 8.99 7.55 10.44.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.45-.28-5.03-1.22-5.03-5.42 0-1.2.43-2.18 1.14-2.95-.11-.28-.5-1.41.11-2.95 0 0 .93-.3 3.05 1.13a10.7 10.7 0 0 1 2.78-.37c.94 0 1.9.13 2.78.37 2.12-1.43 3.05-1.13 3.05-1.13.61 1.54.22 2.67.11 2.95.71.77 1.14 1.75 1.14 2.95 0 4.21-2.59 5.14-5.05 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A11.51 11.51 0 0 0 23.17 11.67C23.17 5.4 18.27.5 12 .5z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'linkedin',
                    onClick: () => window.open(linkedIn, '_blank'),
                    svg: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.49c0 1.66 1.33 2.99 2.98 2.99h.02c1.67 0 3-1.33 3-2.99C7.98 4.84 6.65 3.5 4.98 3.5zM2.4 21.5h5.15V9.75H2.4V21.5zM9.75 21.5h5v-6.55c0-3.5 4.3-3.78 4.3 0V21.5h5v-8.5c0-7.33-8.5-7.06-10.3-3.45V9.75H9.75V21.5z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'email',
                    onClick: () => window.open(`mailto:${gmail}`, '_blank'),
                    svg: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                  },
                ].map((icon, i) => (
                  <button
                    key={i}
                    aria-label={icon.label}
                    onClick={icon.onClick}
                    className="inline-flex items-center justify-center 
                      w-10 h-10 rounded-md 
                      border border-slate-200 dark:border-slate-600
                      bg-white dark:bg-grey-800 
                      transition-all duration-300 
                      hover:scale-110 active:scale-95
                      hover:bg-violet-600 hover:text-white
                      dark:hover:bg-violet-600 dark:hover:text-white"
                  >
                    {icon.svg}
                  </button>
                ))}

                {/* Phone */}
                <button
                  aria-label="phone"
                  onClick={() => {
                    navigator.clipboard.writeText(`${phone}`);

                    const bubble = document.createElement('div');
                    bubble.innerText = 'Copied!';
                    bubble.className = `
                      copied-bubble fixed z-[9999] 
                      text-xs px-3 py-1 rounded-md 
                      bg-black/80 text-white 
                      left-1/2 top-[75%]
                      -translate-x-1/2 animate-fadeInOut
                    `;
                    document.body.appendChild(bubble);
                    setTimeout(() => bubble.remove(), 900);
                  }}
                  className="inline-flex items-center justify-center 
                    w-10 h-10 rounded-md 
                    border border-slate-200 dark:border-slate-600
                    bg-white dark:bg-grey-800 
                    transition-all duration-300 
                    hover:scale-110 active:scale-95
                    hover:bg-violet-600 hover:text-white
                    dark:hover:bg-violet-600 dark:hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.72 2.32a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.18-.45c.73.35 1.51.6 2.32.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* TAGS FIXED */}
            <div className="flex flex-wrap gap-2 max-w-full">
              {tags?.map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: false }}
                  className="text-xs py-1 px-3 rounded-xl break-words 
                    bg-violet-100 text-violet-700
                    border border-violet-200
                    dark:bg-violet-600 dark:text-white
                    dark:border-violet-500
                    shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-start relative w-full">
            <div className="relative w-[14rem] sm:w-[18rem] md:w-[22rem] lg:w-[24rem] mx-auto overflow-visible">
              {/* Avatar */}
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-xl relative z-[10]">
                <Image
                  alt="avatar"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                  src={heroImage}
                />
              </div>

              {/* Floating Tech Icons — safe positions, never hidden */}
              <div className="absolute inset-0 pointer-events-none">
                {techStackImages?.slice(0, 4).map((src, i) => {
                  const positions = [
                    'top-0 left-2 sm:left-4',
                    'top-10 right-0 sm:right-4',
                    'bottom-12 right-2 sm:right-6',
                    'bottom-0 left-4 sm:left-8',
                  ];

                  return (
                    <div
                      key={i}
                      className={`
              absolute ${positions[i]}
              w-10 h-10 sm:w-12 sm:h-12 
              bg-white dark:bg-grey-800 rounded-full 
              grid place-items-center shadow-md 
              transition-transform duration-300 hover:scale-105 
              z-[20]
            `}
                    >
                      <Image
                        alt={`tech-${i}`}
                        src={src}
                        width={60}
                        height={60}
                        className="object-contain p-1"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
