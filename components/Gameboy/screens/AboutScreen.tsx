import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import styles from './AboutScreen.module.scss';

function AboutScreen() {
  return (
    <div className={styles.container}>
      {/* <Image src={`/machi-market-long.gif`} alt='machi market' width={180} height={20} draggable='false' /> */}

      <TypeAnimation
        sequence={[
          `i've created art for as long as I can remember. from doodling sketches in the margins of my notebooks as a kid, to designing graphics, brands, websites, & more, my work reflects the distinct experiences of a nostalgic second-generation pakistani-american. some pieces hold deep meaning, while others are just visuals i think are aesthetically pleasing. and sometimes, i get lucky and think of a concept combining both.`,
        ]}
        wrapper="div"
        speed={95}
        cursor={true}
        // style={{ fontSize: '1em' }}
      />

      <div className={styles.linkWrapper}>
        <button className={styles.link}>exit</button>
        <button className={styles.link}>continue</button>
      </div>

      <Image
        className={styles.backgroundImage}
        src={`/clouds.png`}
        alt="background"
        width={500}
        height={500}
        draggable="false"
      />
    </div>
  );
}

export default AboutScreen;
