import { useEffect, useState } from 'react';

import { themes } from '@/styles/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Only access localStorage in the browser
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || themes.LIGHT;
    }
    return themes.LIGHT;
  });

  useEffect(() => {
    if (theme) {
      document.body.classList.value = `${theme}`;
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
