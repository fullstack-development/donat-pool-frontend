import Image from 'next/image';

import { useWindowSize } from '@/shared/hooks';

import styles from './AboutUs.module.scss';
import { photos } from './constants';
import { Button, Stack } from '../.';

const AboutUs = () => {
  const { width: windowWidth } = useWindowSize();

  const getPhotos = (isFirstRow: boolean) => {
    const filteredPhotos = isFirstRow
      ? photos.filter(({ isFirstRow }) => isFirstRow)
      : photos.filter(({ isFirstRow }) => !isFirstRow);

    return filteredPhotos.map(({ title, className, alt, width, height }) => (
      <Image className={className} src={`/img/${title}.png`} alt={alt} width={width} height={height} key={title} />
    ));
  };

  return (
    <div className="mb-36 max-xl:mb-10 max-md:mb-0">
      <div className="relative flex flex-col items-center">
        <div className={styles.team}>
          {getPhotos(true)}
          {windowWidth > 1430 ? getPhotos(false) : <div className={styles.second}>{getPhotos(false)}</div>}
        </div>
        <div className={styles.dots} />
      </div>

      <div className="mb-[140px] flex self-start max-xl:mb-12 max-xl:justify-center">
        <Button themeType="accent" primaryColor="blue" secondaryColor="red" fontColor="red" isAnimation={true}>
          Donate
          <br /> To Us
        </Button>
      </div>
      <div className="mb-10">
        <Stack />
      </div>
    </div>
  );
};

export { AboutUs };
