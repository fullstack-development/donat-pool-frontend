import cn from 'classnames';

import styles from './DashedButton.module.css';
import { Props } from './types';
import { Arrow } from '..';

const DashedButton = ({
  children,
  primaryColor,
  secondaryColor,
  backgroundColor,
  isClickedTheme,
  isFixedWidth = false,
  onClick,
}: Props) => {
  const variants = {
    primary: { red: 'text-red border-red', blue: 'text-blue border-blue' },
    secondary: { red: 'before:border-red', blue: 'before:border-blue' },
    background: {
      yellow: 'bg-yellow',
      green: 'bg-green',
    },
  };

  return (
    <div className="transition-all duration-500">
      <button
        className={cn(
          styles.common,
          'border-2 border-dashed py-2.5 pl-5 pr-10 text-xl before:border-2 before:border-dashed',
          variants.primary[primaryColor],
          variants.secondary[secondaryColor],
          variants.background[backgroundColor],
          { 'w-44': isFixedWidth },
        )}
        type="button"
        onClick={onClick}
      >
        {children}

        <div className="absolute right-2.5">
          <Arrow isUp={!isClickedTheme} color={primaryColor} />
        </div>
      </button>
    </div>
  );
};

export { DashedButton };
