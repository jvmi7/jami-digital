'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { artworkLinks, links } from '@/components/Footer/constants';
import styles from '@/components/Footer/Footer.module.scss';
import { JvmiIcon } from '@/icons/JvmiIcon';

type FooterProps = {
  showThemeToggle?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  showDivider?: boolean;
};

const Footer = ({ backgroundColor, foregroundColor, showDivider = true }: FooterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className={styles.container} style={{ backgroundColor, color: foregroundColor }}>
      {showDivider && <div className={styles.divider} />}
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.linksSection}>
            <p className={styles.linksTitle}>artwork</p>
            <div className={styles.linksContainer}>
              {artworkLinks.map(({ name, link, icon }) => (
                <a
                  key={name}
                  href={link}
                  className={styles.link}
                  onMouseEnter={() => setHoveredLink(name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className={styles.icon}>
                    {icon({ width: 24, height: 24, enableColor: hoveredLink === name })}
                  </div>

                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.linksSection}>
            <p className={styles.linksTitle}>socials</p>

            <div className={styles.linksContainer}>
              {links.map(({ name, link }) => (
                <a key={name} href={link} target="_blank" className={styles.link} rel="noreferrer">
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <p>jvmi.art 2024</p>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              if (pathname !== '/') {
                router.push('/');
              }
            }}
          >
            <JvmiIcon width={100} height={65} color="currentColor" className={styles.logo} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
