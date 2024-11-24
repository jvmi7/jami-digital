import classNames from 'classnames';
import { WindowThemeType } from '../../types';
import styles from './ContentPane.module.scss';
import { ExternalLinkIcon } from '../../icons/ExternalLinkIcon';

export type ContentPaneMetadataType = {
  collection: string;
  item: string;
  price?: { price: string; soldOut: boolean };
  stats: { label: string; value: string; url?: string }[];
  traits?: { trait_type: string; value: string }[];
  caption: React.ReactNode;
  buttons: JSX.Element[];
};

interface Props {
  theme: WindowThemeType;
  metadata: ContentPaneMetadataType;
}

const ContentPane = ({ theme, metadata }: Props) => {
  const showTraits = metadata.traits && metadata.traits.length > 0;
  return (
    <div className={styles.container} style={{ color: theme.textPrimary }}>
      <p className={styles.label} style={{ color: theme.textSecondary }}>
        {metadata.collection}
      </p>
      <p className={styles.value}>{metadata.item}</p>
      {metadata.price && (
        <p className={styles.label}>
          <span className={classNames(metadata.price?.soldOut && styles.strikethrough)}>
            {metadata.price?.price}
          </span>
          {metadata.price?.soldOut && <span className={styles.soldOutLabel}>SOLD OUT</span>}
        </p>
      )}

      <div className={styles.divider} style={{ borderBottom: `1px solid ${theme.dividerColor}` }} />
      <div className={styles.caption}>{metadata.caption}</div>
      <div className={styles.divider} style={{ borderBottom: `1px solid ${theme.dividerColor}` }} />

      {showTraits && (
        <>
          <p className={styles.label} style={{ color: theme.textSecondary }}>
            traits
          </p>
          <div className={styles.traits}>
            {metadata.traits?.map(trait => (
              <div
                key={trait.value}
                className={styles.trait}
                style={{ backgroundColor: theme.windowBackground }}
              >
                <div className={styles.label} style={{ color: theme.textSecondary }}>
                  {trait.trait_type}
                </div>
                <div className={styles.value}>{trait.value}</div>
              </div>
            ))}
          </div>
          <div
            className={styles.divider}
            style={{ borderBottom: `1px solid ${theme.dividerColor}` }}
          />
        </>
      )}
      <div className={styles.stats}>
        {metadata.stats.map(stat => (
          <div className={styles.stat} key={stat.value}>
            <div className={styles.label} style={{ color: theme.textSecondary }}>
              {stat.label}
            </div>
            {stat.url ? (
              <a
                href={stat.url}
                target="_blank"
                className={classNames(styles.value, styles.url)}
                style={{ color: theme.textPrimary }}
                rel="noreferrer"
              >
                {stat.value}
                <ExternalLinkIcon height={14} color={theme.textPrimary} />
              </a>
            ) : (
              <div className={styles.value}>{stat.value}</div>
            )}
          </div>
        ))}
      </div>
      {/* <div className={styles.divider} style={{ borderBottom: `1px solid ${theme.dividerColor}` }} /> */}
      <div className={styles.buttons}>{metadata.buttons.map(button => button)}</div>
    </div>
  );
};

export { ContentPane };
