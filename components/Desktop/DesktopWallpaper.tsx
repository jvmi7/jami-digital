import { useMemo, useState } from 'react';
import styles from './DesktopWallpaper.module.scss';

const ROWS = 80;
const COLUMNS = 80;

const DesktopWallpaper = () => {
  return (
    <div className={styles.container}>
      <Grid />
    </div>
  );
};

const Grid = () => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    const columns = [];

    for (let j = 0; j < COLUMNS; j++) {
      columns.push(<Square key={j} />);
    }

    rows.push(
      <div key={i} className={styles.row}>
        {columns}
      </div>
    );
  }

  return <div className={styles.grid}>{rows}</div>;
};

const Square = () => {
  const randomColor = useMemo(() => getRandomColor(), []);
  const [color, setColor] = useState(randomColor);

  const handleHover = () => {
    const currentColor = color;
    const randomColor = '#FFF';
    setColor(randomColor);

    setTimeout(() => {
      setColor(currentColor);
    }, 1000);
  };

  return (
    <div className={styles.square} onMouseOver={handleHover}>
      <div className={styles.squareInner} style={{ backgroundColor: color }} />
    </div>
  );
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export { DesktopWallpaper };
