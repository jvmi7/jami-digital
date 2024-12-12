'use client';

import { Footer } from '@/components/Footer/Footer';
import { GalleryPage } from '@/swatches/GalleryPage/GalleryPage';

const gallery = () => {
  return (
    <div>
      <GalleryPage />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </div>
  );
};

export default gallery;
