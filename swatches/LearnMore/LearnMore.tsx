import Tilt from 'react-parallax-tilt';
import styles from './LearnMore.module.scss';

const LearnMore = () => {
  return (
    <Tilt
      tiltReverse
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className={styles.container}
    >
      <div className={styles.header}>swatches-info.md</div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p className={styles.annotation}>jvmi, just now | author (jvmi)</p>
          <h1 className={styles.h1}>swatches</h1>
          <p className={styles.description}>
            an interactive generative art collection
          </p>
          <p className={styles.text}>
            each <HighlightedText>swatch</HighlightedText> is a unique art piece
            defined by a{' '}
            <span style={{ color: '#555' }}>3x3 grid of shapes</span> of{' '}
            <DistinctColor /> drawn from curated color palettes. the infinitely
            repeatable interaction begins when the viewer touches a shape,
            causing it to disappear momentarily as the shape's color spills
            across the entire grid.
          </p>
          <p className={styles.text}>
            every <HighlightedText>swatch</HighlightedText> offers various{' '}
            <span style={{ color: '#555' }}>modes</span> that alter the visual
            presentation, including:
          </p>
          <ul className={styles.listContainer}>
            <li>
              <HighlightedText color="red" backgroundColor="#FFE3E3">
                circular
              </HighlightedText>{' '}
              - shape edges are rounded
            </li>
            <li>
              <HighlightedText color="red" backgroundColor="#FFE3E3">
                square
              </HighlightedText>{' '}
              - shapes edges are harsh
            </li>
            <li>
              <HighlightedText color="red" backgroundColor="#FFE3E3">
                hypnotic
              </HighlightedText>{' '}
              - shapes ripple infinitely
            </li>
          </ul>
          <p className={styles.text}>
            <HighlightedText>swatches</HighlightedText> can also be rendered in
            the following sizes:
          </p>
          <ul className={styles.listContainer}>
            <li>
              <HighlightedText color="#FF6700" backgroundColor="#FFF1E6">
                tiny
              </HighlightedText>
            </li>
            <li>
              <HighlightedText color="#FF6700" backgroundColor="#FFF1E6">
                medium
              </HighlightedText>
            </li>
            <li>
              <HighlightedText color="#FF6700" backgroundColor="#FFF1E6">
                jumbo
              </HighlightedText>
            </li>
          </ul>
          <p className={styles.text}>
            additionally, <HighlightedText>swatches</HighlightedText> can be
            rotated{' '}
            <HighlightedText color="#00D600" backgroundColor="#E0FFDE">
              left
            </HighlightedText>{' '}
            or{' '}
            <HighlightedText color="#0074FF" backgroundColor="#E1F4FF">
              right
            </HighlightedText>{' '}
            & toggled between{' '}
            <HighlightedText color="#000" backgroundColor="#E5E5E5">
              light mode
            </HighlightedText>{' '}
            and{' '}
            <HighlightedText color="white" backgroundColor="#333">
              dark mode
            </HighlightedText>{' '}
            to suit the viewer's mood/preference.
          </p>
          <h3 className={styles.subheading}>control panel</h3>
          <p className={styles.text}>
            to view all of the controls & their corresponding keyboard
            shortcuts, click the <HighlightedText>arrow icon</HighlightedText>{' '}
            at the bottom of a <HighlightedText>swatch</HighlightedText> to get
            started.
          </p>
          <h3 className={styles.subheading}>metadata menu</h3>
          <p className={styles.text}>
            tapping on the <HighlightedText>menu icon</HighlightedText> on the
            top lefthand corner of the canvas will reveal the metadata menu
            displaying the traits for the{' '}
            <HighlightedText>swatch</HighlightedText>.
          </p>
          <p style={{ color: '#ccc' }}>
            /* swatches is the exploration of color, motion, and human
            interaction in a digital space. */
          </p>
        </div>
      </div>
    </Tilt>
  );
};

const HighlightedText = ({
  children,
  color = 'var(--swatches-text-color)',
  backgroundColor = '#E5E5E5',
}: {
  children: string;
  color?: string;
  backgroundColor?: string;
}) => {
  return (
    <span
      style={{
        color: color,
        fontWeight: '600',
        backgroundColor: backgroundColor,
        padding: '2px 6px',
        // margin: '0 6px',
        borderRadius: '0.25rem',
      }}
    >
      {children}
    </span>
  );
};

const DistinctColor = () => {
  return (
    <span style={{ fontWeight: '700' }}>
      <span style={{ color: '#FF0000' }}>d</span>
      <span style={{ color: '#FF7F00' }}>i</span>
      <span style={{ color: '#FFDA00' }}>s</span>
      <span style={{ color: '#7FFF00' }}>t</span>
      <span style={{ color: '#00FF00' }}>i</span>
      <span style={{ color: '#00FF7F' }}>n</span>
      <span style={{ color: '#00CFFF' }}>c</span>
      <span style={{ color: '#007FFF' }}>t</span>{' '}
      <span style={{ color: '#0000FF' }}>c</span>
      <span style={{ color: '#7F00FF' }}>o</span>
      <span style={{ color: '#FF00FF' }}>l</span>
      <span style={{ color: '#FF007F' }}>o</span>
      <span style={{ color: '#FF0000' }}>r</span>
    </span>
  );
};

export default LearnMore;
