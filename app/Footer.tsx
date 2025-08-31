import { social } from '@/types/main';
import React from 'react';

export default function Footer({ name }: { socials: social[]; name: string }) {
  return (
    <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">
      <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">
        <p className="text-sm mt-2 md:mt-0">
          Made with
          <span className="animate-pulse"> ❤️ </span>
          by
          <span className="text-violet-600"> {name}</span>
        </p>
      </div>
    </footer>
  );
}
