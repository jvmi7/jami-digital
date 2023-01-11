import JamiLogo from '../JamiLogo';
import styles from './Header.module.scss';
import { links } from '../../constants';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <button className={styles.logo}>
            <JamiLogo height={18} width={40} />
          </button>
          <div className={styles.links}>
            {links.map((link) => (
              <a className={styles.link} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.date}>Wednesday Jan 11</div>
          <div className={styles.time}>4:22 PM</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
