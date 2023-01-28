import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styles from './about.module.scss';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from 'react-use';
import { TypeAnimation } from 'react-type-animation';

const lines = [
  `i've created art for as long as I can remember. from doodling sketches in the margins of my notebooks as a kid, to designing graphics, brands, websites, & more, my work reflects the distinct experiences of a nostalgic second-generation pakistani-american. some pieces hold deep meaning, while others are just visuals i think are aesthetically pleasing. and sometimes, i get lucky and think of a concept combining both.`,
  `the term "machi market" originates from an expression used by my parents throughout my childhood. in sindhi, it translates to "fish market," evoking images of the lively and crowded open seafood markets in south asia. but for my family, it was a term that encapsulated the energy and chaos of any bustling, hectic environment - like the river of brake-lights you see during rush hour traffic in los angeles or the checkout lines we stood in on a friday night at blockbuster.`,
  `years later, it only makes sense to pay homage to the expression I once knew and bring this metaphor to life. machi market is a vibrant bazaar of creativity, disguised as a digital marketplace offering streetwear, posters, collectibles, and more. it mirrors the world around us through a new lens, augmented by the memories of our childhood. my goal is to create a sense of community where people from all backgrounds can come together and connect through art and culture.`,
  `since the day i first picked up a pencil, it's been my passion to bring my visions to life. and with each passing day, i am building towards a future where the sketches in my notebook manifest into a machi market of my own, effortlessly connecting the past, present & future.`,
  '- jami'
];

function about() {
  const { height, width } = useWindowSize();
  const enableTilt = width > 470;
  return (
    <div className={styles.container}>
      <AnimatePresence mode='wait'>
        <Tilt trackOnWindow className={styles.tiltWrapper} perspective={3000} scale={enableTilt ? 0.96 : 1} transitionEasing={'ease'} transitionSpeed={200} tiltAngleXManual={enableTilt ? null : 0}>
          <div className={styles.textContainer}>
            {lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Tilt>
      </AnimatePresence>
    </div>
  );
}

export default about;
