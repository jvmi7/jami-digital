import { CollectionMetadataType, WindowThemeType } from '../../types';

import { CollectionImage } from './CollectionImage';
import styles from './CollectionMetadata.module.scss';

interface Props {
  theme: WindowThemeType;
  metadata: CollectionMetadataType;
}

const CollectionMetadata = ({ theme, metadata }: Props) => {
  const showStats = metadata.stats && metadata.stats.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <CollectionImage
            height={'60px'}
            width={'60px'}
            imagePath={metadata.imagePath}
            background={metadata.imageBackground}
          />
        </div>
        <div>
          <div className={styles.name} style={{ color: theme.textPrimary }}>
            {metadata.name}
          </div>
          <div className={styles.description} style={{ color: theme.textSecondary }}>
            {metadata.description}
          </div>
        </div>
      </div>

      {showStats && (
        <div className={styles.stats} style={{ color: theme.textPrimary }}>
          {metadata.stats?.map((stat, index) => (
            <div className={styles.statContainer} key={index}>
              <div key={stat.label} className={styles.stat}>
                <div className={styles.value}>{stat.value}</div>
                <div className={styles.label} style={{ color: theme.textSecondary }}>
                  {stat.label}
                </div>
              </div>
              {metadata.stats?.length && index < metadata.stats?.length - 1 && (
                <div className={styles.divider} style={{ borderColor: theme.dividerColor }} />
              )}
            </div>
          ))}
        </div>
      )}

      <div className={styles.buttonContainer}>
        {metadata.buttons.map((button, index) => {
          return (
            <div key={index} className={styles.button}>
              {button}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CollectionMetadata };
