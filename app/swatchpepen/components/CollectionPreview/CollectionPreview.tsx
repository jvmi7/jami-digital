import { motion } from 'framer-motion';
import { getAnimationProps } from '@/constants/animations';
import styles from '@/app/swatchpepen/components/CollectionPreview/CollectionPreview.module.scss';
import { fullRows } from '@/app/swatchpepen/constants';
import { useEffect, useState } from 'react';
import { ImagePreview } from '@/components/ImagePreview/ImagePreview';
import { getItemFromPath, getNameFromItem } from '../../helpers';
import { ImagePreviewDialog } from '@/components/ImagePreview/ImagePreviewDialog';
import Div100vh from 'react-div-100vh';
import { useWindowSize } from 'react-use';

const CollectionPreview = () => {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 580) {
      setItemsPerRow(2);
    } else if (width <= 760) {
      setItemsPerRow(3);
    } else {
      setItemsPerRow(4);
    }
  }, [width]);

  const getAllVisiblePaths = () => {
    return fullRows.flatMap((row, rowIndex) => {
      const visiblePaths =
        row.length <= itemsPerRow ? row : [row[0], ...row.slice(-itemsPerRow + 1)];
      return visiblePaths;
    });
  };

  const handlePrevious = () => {
    if (!selectedPath) return;
    const paths = getAllVisiblePaths();
    const currentIndex = paths.indexOf(selectedPath);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : paths.length - 1;
    setSelectedPath(paths[newIndex]);
  };

  const handleNext = () => {
    if (!selectedPath) return;
    const paths = getAllVisiblePaths();
    const currentIndex = paths.indexOf(selectedPath);
    const newIndex = currentIndex < paths.length - 1 ? currentIndex + 1 : 0;
    setSelectedPath(paths[newIndex]);
  };

  const renderImage = (path: string, rowIndex: number, colIndex: number) => {
    const { edition, index } = getItemFromPath(path);
    const name = getNameFromItem(edition, index);
    return (
      <ImagePreviewDialog
        key={`${rowIndex}-${colIndex}`}
        trigger={
          <div>
            <ImagePreview
              name={name}
              src={path}
              animationDelay={4 + rowIndex + colIndex}
              style={{
                borderRadius: '24px',
                borderTopLeftRadius: '8px',
              }}
            />
          </div>
        }
        iframeUrl={selectedPath || path}
        bottom={
          <div>
            {selectedPath
              ? getNameFromItem(
                  getItemFromPath(selectedPath).edition,
                  getItemFromPath(selectedPath).index
                )
              : name}
          </div>
        }
        onOpenChange={open => {
          if (open) {
            setSelectedPath(path);
          } else {
            setSelectedPath(null);
          }
        }}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    );
  };

  return (
    <motion.div className={styles.container}>
      <motion.h2 className={styles.title} {...getAnimationProps(0)}>
        curated collection
      </motion.h2>
      <motion.div className={styles.collection} {...getAnimationProps(3)}>
        {fullRows.map((row, rowIndex) => {
          const visiblePaths =
            row.length <= itemsPerRow ? row : [row[0], ...row.slice(-itemsPerRow + 1)];
          return (
            <motion.div key={rowIndex} className={styles.row} {...getAnimationProps(4 + rowIndex)}>
              {visiblePaths.map((path, colIndex) => renderImage(path, rowIndex, colIndex))}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export { CollectionPreview };
