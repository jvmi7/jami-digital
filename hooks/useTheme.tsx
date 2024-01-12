import { useEffect, useState } from 'react';
import { themes } from '../styles/theme';

const getRandomTheme = () => {
  try {
    return Object.keys(themes).at(
      Math.floor(Math.random() * Object.keys(themes).length)
    );
  } catch (e) {
    return themes.LIGHT;
  }
};

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
