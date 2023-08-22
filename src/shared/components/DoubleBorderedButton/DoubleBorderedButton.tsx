import cn from 'classnames';
import Link from 'next/link';

import VARIANTS from './constants';
import styles from './DoubleBorderedButton.module.css';
import { Props } from './types';

const DoubleBorderedButton = ({
  children,
  primaryColor,
  backgroundColor,
  href = null,
  isExternal = false,
  isFullWidth = false,
  size = 'm',
  onClick,
}: Props) => {
  const classes = cn(
    styles.common,
    VARIANTS.size[size],
    VARIANTS.primary[primaryColor],
    VARIANTS.background[backgroundColor],
    { 'w-full': isFullWidth },
    'border-2 before:border-2',
  );

  return (
    <div className={cn('transition-all duration-500', { 'w-full': isFullWidth })}>
      {href !== null ? (
        <Link
          href={href}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noreferrer' : undefined}
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
