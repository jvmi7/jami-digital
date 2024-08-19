export const createKeyframeAnimation = (
  name: string,
  colors: string[],
  document: Document
) => {
  // Include the first color at both 0% and 100% for a smooth loop
  const extendedColors = [...colors];
  const keyframes = extendedColors
    .map((color, index) => {
      const percentage = (index / (extendedColors.length - 1)) * 100;
      return `${percentage}% { background-color: ${color}; }`;
    })
    .join(' ');

  const keyframesRule = `@keyframes ${name} { ${keyframes} }`;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
};

export const generateAllAnimations = (colors: string[], document: Document) => {
  for (let i = 0; i < colors.length; i++) {
    const shiftedPalette = colors.slice(i).concat(colors.slice(0, i));
    createKeyframeAnimation(`colorCycle${i}`, shiftedPalette, document);
  }
};

export const generateRandomOrder = (n: number): number[] => {
  // Create an array with numbers from 0 to n-1
  const arr = Array.from({ length: n }, (_, i) => i);

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};
