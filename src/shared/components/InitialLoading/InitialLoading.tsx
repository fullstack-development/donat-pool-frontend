import cn from 'classnames';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { useWindowSize } from '@/shared/hooks';

import type { Props } from './types';
import { ActionDonuts, ScrollHelper } from '../.';

const InitialLoading = ({ windowScroll, isAnimationActive }: Props) => {
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (innerCircleRef?.current) {
      innerCircleRef.current.style.transform = `scale(${windowScroll / 10})`;
    }
  }, [windowScroll, innerCircleRef]);

  useEffect(() => {
    if (wrapperRef?.current && width > 1280) {
      if (isAnimationActive) {
        wrapperRef.current.style.height = `${1500 - windowScroll}px`;
      } else {
        wrapperRef.current.style.height = '965px';
      }
    }
  }, [wrapperRef, windowScroll, isAnimationActive, width]);

  return (
    <div
      className={cn('relative flex h-[1500px] w-full items-start justify-center overflow-hidden bg-red max-xl:h-auto')}
      ref={wrapperRef}
    >
      <div
        ref={innerCircleRef}
        className={cn(
          'absolute z-[4] mt-[45vh] h-[230px] w-[230px] scale-0 rounded-full border-[90px] border-yellow max-xl:hidden',
          { hidden: !(windowScroll < 500 && isAnimationActive) },
        )}
      />
      <div
        className={cn('absolute z-[3] h-full w-full bg-red max-xl:hidden', {
          hidden: !(windowScroll < 40 && isAnimationActive),
        })}
      >
        <ScrollHelper />
      </div>
      <ActionDonuts isAnimationActive={isAnimationActive} />
      <Image
        className={cn(
          'bottom-0 z-[2] flex shrink-0 max-xl:static max-xl:max-w-[90vw] max-xl:px-5 max-xl:pb-5 max-xl:pt-[150px]',
          {
            'absolute max-w-[770px]': isAnimationActive,
            'max-w-[90vw] px-5 pb-5 pt-[150px]': !isAnimationActive,
          },
        )}
        src="/img/cat.svg"
        alt="cat"
        width={770}
        height={795}
        priority={true}
      />
    </div>
  );
};

export { InitialLoading };
