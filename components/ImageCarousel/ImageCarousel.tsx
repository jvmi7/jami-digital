import styles from './ImageCarousel.module.scss';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useMeasure } from 'react-use';
import { useInView } from 'react-intersection-observer';

interface ImageCarouselProps {
  images: string[];
  type?: 'single' | 'multiple';
}

const ImageCarousel = ({ images, type = 'single' }: ImageCarouselProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const plugins = inView
    ? [
        Autoplay({
          delay: 2000,
        }),
      ]
    : [];

  const basisClasses =
    'min-[510px]:basis-1/2 md:basis-1/2 lg:basis-1/3 basis-full';

  const containerSpacing = type === 'single' ? '-ml-2' : '-ml-2';

  const renderImages = () => {
    if (type === 'single') {
      return images.map((image, index) => (
        <CarouselItem
          className={`flex justify-center pl-2 ${basisClasses}`}
          key={index}
        >
          <div
            key={index}
            className="flex justify-center items-center" // Centering the content
            style={{ height: '100%', background: '#222' }} // Ensure the div fills the grid cell
          >
            <Image
              src={image}
              alt={'image-' + index}
              width={500}
              height={500}
              style={{ objectFit: 'contain' }}
              // className="rounded-lg"
            />
          </div>
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
          className={`grid grid-cols-2 grid-rows-2 gap-2 pl-2 ${basisClasses}`}
          key={groupIndex}
        >
          {group.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center" // Centering the content
              style={{ height: '100%', background: '#222' }} // Ensure the div fills the grid cell
            >
              <Image
                src={image}
                alt={'image-' + groupIndex + '-' + index}
                width={250}
                height={250}
                layout="intrinsic" // Adjust as needed for your layout
                style={{ objectFit: 'contain' }}
                // className="rounded-sm"
              />
            </div>
          ))}
        </CarouselItem>
      ));
    }
  };

  return (
    <div className={styles.container} ref={ref}>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={plugins}
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
