import cn from 'classnames';
import Link from 'next/link';

import { isLinkExternal } from '@/shared/helpers';

import styles from './DoubleBorderedButton.module.css';
import { Props } from './types';

const DoubleBorderedButton = ({
  children,
  primaryColor,
  backgroundColor,
  href = null,
  isFullWidth = false,
  size = 'm',
  onClick,
}: Props) => {
  const variants = {
    primary: { blue: 'bg-blue text-blue border-blue before:border-blue' },
    background: {
      white: 'bg-white',
      red: 'bg-red',
    },
    size: {
      s: 'text-base px-4 py-2.5',
      m: 'text-xl px-5 py-2.5',
    },
  };
  const classes = cn(
    styles.common,
    variants.size[size],
    variants.primary[primaryColor],
    variants.background[backgroundColor],
    { 'w-full': isFullWidth },
    'border-2 before:border-2',
  );

  return (
    <div className={cn('transition-all duration-500', { 'w-full': isFullWidth })}>
      {href !== null ? (
        <Link
          href={href}
          target={isLinkExternal(href) ? '_blank' : '_self'}
          rel={isLinkExternal(href) ? 'noreferrer' : undefined}
          className={classes}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} type="button" onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
};

export { DoubleBorderedButton };
