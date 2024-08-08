import { useEffect } from 'react';
import { Home } from './Home/Home';

const HomePage = () => {
  useEffect(() => {
    // Store the original body background color
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Set the new background color when the component mounts
    document.body.style.backgroundColor = 'black'; // Replace '#yourDesiredColor' with your chosen color

    // Reset to the original background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Home />
    </div>
  );
};

export { HomePage };
