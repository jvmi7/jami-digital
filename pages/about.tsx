import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styles from './about.module.scss';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from 'react-use';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import JamiLogo from '../components/JamiLogo';
import Link from 'next/link';
import { links } from '../constants';

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

  const logo = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.4 } }
  };

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.12
      }
    }
  };
  return (
    <motion.div className={styles.container} variants={container} initial='hidden' animate='show' exit='hidden'>
      <AnimatePresence mode='wait'>
        <Link href={'/'}>
          <motion.div initial='hidden' animate='visible' exit='exit' variants={logo}>
            <Image src={`/machi-logo-white.png`} alt='machi market' width={300} height={60} draggable='false' className={styles.logo} />
          </motion.div>
        </Link>

        <Tilt trackOnWindow className={styles.tiltWrapper} perspective={3000} scale={enableTilt ? 0.96 : 1} transitionEasing={'ease'} transitionSpeed={200} tiltAngleXManual={enableTilt ? null : 0}>
          <motion.div className={styles.textContainer} initial='hidden' animate='visible' exit='exit' variants={logo}>
            <div className={styles.background} />
            <div className={styles.header}>
              <div className={styles.headerButtons}>
                <button className={styles.red} />
                <button className={styles.yellow} />
                <button className={styles.green} />
              </div>
              <div className={styles.labelWrapper}>
                <p className={styles.label}>backstory.txt</p>
              </div>
            </div>
            <div className={styles.body}>
              <p>
                i've created art for as long as I can remember. from doodling sketches in the margins of my notebooks as a kid, to designing graphics, brands, websites, & more, my work reflects the distinct experiences of a <span className={styles.pink}>nostalgic</span> <span className={styles.yellow}>second-generation</span> <span className={styles.green}>pakistani-american</span>. some pieces hold deep meaning, while others are just visuals i think are aesthetically pleasing. and sometimes, i
                get lucky and think of a concept <span className={styles.blend}>combining both</span>.
              </p>
              <p>
                the term <span className={styles.highlight}>"machi market"</span> originates from an expression used by my parents throughout my childhood. in sindhi, it translates to "fish market," evoking images of the lively and crowded <span className={styles.teal}>open seafood markets </span>
                <span className={styles.orange}> in south asia</span> . but for my family, it was a term that encapsulated the energy and chaos of any bustling, hectic environment - like the river of brake-lights you see during <span className={styles.red}>rush hour traffic in los angeles</span> or the checkout lines we stood in on a <span className={styles.blockbuster}>friday night at blockbuster</span>.
              </p>
              <p>
                years later, it only makes sense to pay homage to the expression I once knew and bring this metaphor to life. machi market is a <span className={styles.bazzar}>vibrant bazaar of creativity</span>, disguised as a digital marketplace offering <span className={styles.items}>streetwear, posters, collectibles, & more</span>. it mirrors the world around us through a new lens, augmented by the memories of our childhood. my goal is to create a sense of community where people from all
                backgrounds can come together and <span className={styles.connect}>connect through art and culture</span>.
              </p>
              <p>
                since the day i first picked up a pencil, it's been my passion to bring my <span className={styles.visions}>visions to life</span>. and with each passing day, i am building towards a future where the <span className={styles.sketches}>sketches in my notebook</span> manifest into a machi market of my own, effortlessly connecting the <span className={styles.end}>past, present & future</span>.
              </p>
              {/* <p className={styles.signature}>- jami</p> */}
              <Image src={`/signature.png`} alt='machi market' width={110} height={48} draggable='false' className={styles.signature} />
            </div>
          </motion.div>
        </Tilt>
      </AnimatePresence>
      <motion.div className={styles.footer} initial='hidden' animate='visible' exit='exit' variants={logo}>
        {/* <Image src={`/machi-logo-white.png`} alt='machi market' width={300} height={60} draggable='false' className={styles.logo} /> */}
        <Link className={styles.button} href={links[0].href} target='_self'>
          Continue
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default about;
