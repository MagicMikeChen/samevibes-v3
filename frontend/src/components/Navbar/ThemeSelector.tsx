import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { translateMaker, changeLanguage } from '../../utils';

const ThemeSelector = ({cbCloseFunc}) => {
  const router = useRouter();
  const t = translateMaker(router);
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      cbCloseFunc()
    }
  };
  return (
    <div>
      {' '}
      <label className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onClick={switchTheme}
          />
          <div className="block h-6 w-10 rounded-full bg-gray-600"></div>
          <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition dark:translate-x-full dark:bg-green-600"></div>
        </div>
        <div className="ml-3 font-medium text-gray-600 dark:text-white">
          {t['txt-darkmode']}
        </div>
      </label>
    </div>
  );
};

export default ThemeSelector;
