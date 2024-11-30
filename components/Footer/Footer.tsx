'use client';

import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useRouter, usePathname } from 'next/navigation';
import { Link as ScrollLink } from 'react-scroll';

import { artworkLinks, links } from '@/components/Footer/constants';
import styles from '@/components/Footer/Footer.module.scss';
import { Switch } from '@/components/Switch';
import { useTheme } from '@/context/ThemeContext';
import { JvmiIcon } from '@/icons/JvmiIcon';

type FooterProps = {
  showThemeToggle?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  showDivider?: boolean;
};

const Footer = ({
  showThemeToggle = true,
  backgroundColor,
  foregroundColor,
  showDivider = true,
}: FooterProps) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className={styles.container} style={{ backgroundColor, color: foregroundColor }}>
      {showDivider && <div className={styles.divider} />}
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.linksSection}>
            <p className={styles.linksTitle}>artwork</p>
            <div className={styles.linksContainer}>
              {artworkLinks.map(({ name, link }) => (
                <a key={name} href={link} target="_blank" className={styles.link} rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.linksSection}>
            <p className={styles.linksTitle}>socials</p>
            <div className={styles.linksContainer}>
              {links.map(({ name, link }) => (
                <a key={name} href={link} target="_blank" className={styles.link} rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.logoContainer}>
          {showThemeToggle && (
            <div className={styles.themeContainer}>
              {theme === 'DARK' ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
              <Switch
                checked={theme === 'DARK'}
                onCheckedChange={() => {
                  setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT');
                }}
              />
            </div>
          )}
          <p>jvmi.art 2024</p>
          <ScrollLink
            to="splash"
            smooth={true}
            duration={500}
            onClick={() => {
              if (pathname !== '/') {
                router.push('/');
              }
            }}
          >
            <JvmiIcon width={100} height={65} color="currentColor" />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
