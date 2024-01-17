import styles from './ImageCarousel.module.scss';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

import Image from 'next/image';
import { useMeasure } from 'react-use';

interface ImageCarouselProps {
  images: string[];
}
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const basisClasses =
    'min-[510px]:basis-2/3 md:basis-1/2 lg:basis-1/3 basis-4/5';

  const delay = Math.random() * 0.5 * 10000;

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
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              className={`flex justify-center pl-4 ${basisClasses}`}
            >
              <Image
                key={index}
                src={image}
                alt={'motorhead-' + index}
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  );
};

export { ImageCarousel };
