import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import styles from '@/app/swatchpepen/components/CollectionPreview/CollectionPreview.module.scss';
import { fullRows } from '@/app/swatchpepen/constants';
import { getItemFromPath, getNameFromItem } from '@/app/swatchpepen/helpers';
import Button from '@/components/Button/Button';
import { ImagePreview } from '@/components/ImagePreview/ImagePreview';
import { ImagePreviewDialog } from '@/components/ImagePreview/ImagePreviewDialog';
import { getAnimationProps } from '@/constants/animations';

// Handles the responsive layout of the collection preview
const useResponsiveLayout = () => {
  const { width } = useWindowSize();
  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    if (width <= 580) setItemsPerRow(2);
    else if (width <= 760) setItemsPerRow(3);
    else setItemsPerRow(4);
  }, [width]);

  return itemsPerRow;
};

// Handles the navigation between images
const useImageNavigation = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  // Get all paths in a flat array, including hidden ones
  const getAllPaths = () => {
    return fullRows.flat();
  };

  const handlePrevious = () => {
    if (!selectedPath) return;
    const paths = getAllPaths();
    const currentIndex = paths.indexOf(selectedPath);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : paths.length - 1;
    setSelectedPath(paths[newIndex]);
  };

  const handleNext = () => {
    if (!selectedPath) return;
    const paths = getAllPaths();
    const currentIndex = paths.indexOf(selectedPath);
    const newIndex = currentIndex < paths.length - 1 ? currentIndex + 1 : 0;
    setSelectedPath(paths[newIndex]);
  };

  return {
    selectedPath,
    setSelectedPath,
    handlePrevious,
    handleNext,
  };
};

// Handles the individual image preview items
const ImagePreviewItem = ({
  path,
  rowIndex,
  colIndex,
  onSelect,
  selectedPath,
  onPrevious,
  onNext,
}: {
  path: string;
  rowIndex: number;
  colIndex: number;
  onSelect: (path: string, open: boolean) => void;
  selectedPath: string | null;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  const { edition, index } = getItemFromPath(selectedPath || path);
  const name = getNameFromItem(edition, index);
  const iframeUrl = `https://swatchpepen.vercel.app/?edition=${edition}&id=${index}`;

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
      iframeUrl={iframeUrl}
      bottom={<div className={styles.dialogBottom}>{name}</div>}
      onOpenChange={open => onSelect(path, open)}
      onPrevious={onPrevious}
      onNext={onNext}
    />
  );
};

// Handles the collection preview section
const CollectionPreview = () => {
  const itemsPerRow = useResponsiveLayout();
  const { selectedPath, setSelectedPath, handlePrevious, handleNext } = useImageNavigation();

  const handleImageSelect = (path: string, open: boolean) => {
    setSelectedPath(open ? path : null);
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
              {visiblePaths.map((path, colIndex) => (
                <ImagePreviewItem
                  key={`${rowIndex}-${colIndex}`}
                  path={path}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  onSelect={handleImageSelect}
                  selectedPath={selectedPath}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              ))}
            </motion.div>
          );
        })}
      </motion.div>
      <Button href="/swatchpepen" variant="primary" className={styles.button}>
        view all
      </Button>
    </motion.div>
  );
};

export { CollectionPreview };
