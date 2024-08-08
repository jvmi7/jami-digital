import { useEffect, useState } from 'react';
import { themes } from '../styles/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(themes.LIGHT);
  useEffect(() => {
    if (theme) {
      document.body.classList.value = `${theme}`;
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
