import styles from './ImageCarousel.module.scss';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useMeasure } from 'react-use';

interface ImageCarouselProps {
  images: string[];
  type?: 'single' | 'multiple';
}

const ImageCarousel = ({ images, type = 'single' }: ImageCarouselProps) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const basisClasses =
    'min-[510px]:basis-2/3 md:basis-1/2 lg:basis-1/3 basis-full';

  const containerSpacing = type === 'single' ? '-ml-4' : '-ml-2';

  const renderImages = () => {
    if (type === 'single') {
      return images.map((image, index) => (
        <CarouselItem
          className={`flex justify-center pl-4 ${basisClasses}`}
          key={index}
        >
          <Image
            src={image}
            alt={'image-' + index}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </CarouselItem>
      ));
    } else {
      // type === 'multiple'
      // Split images into groups of four for the grid
      const groupedImages = [];
      for (let i = 0; i < images.length; i += 4) {
        groupedImages.push(images.slice(i, i + 4));
      }

      return groupedImages.map((group, groupIndex) => (
        <CarouselItem
          className={`grid grid-cols-2 grid-rows-2 gap-3 pl-3 ${basisClasses}`}
          key={groupIndex}
        >
          {group.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={'image-' + groupIndex + '-' + index}
              width={250}
              height={250}
              className="rounded-md"
            />
          ))}
        </CarouselItem>
      ));
    }
  };

  return (
    <div className={styles.container}>
      <Carousel
        ref={ref}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className={containerSpacing}>
          {renderImages()}
        </CarouselContent>
      </Carousel>
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  );
};

export { ImageCarousel };
