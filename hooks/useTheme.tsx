import { useEffect, useState } from 'react';
import { themes } from '../styles/theme';

const getRandomTheme = () => {
  return Object.keys(themes).at(Math.floor(Math.random() * Object.keys(themes).length));
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getRandomTheme());
  useEffect(() => {
    if (theme) {
      document.body.classList.value = `${theme}`;
    }
  }, [theme]);

  return {
    theme,
    setTheme
  };
};
