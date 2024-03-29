'use client';

import cn from 'classnames';
import { useState } from 'react';

import RedArrowIcon from '@public/icons/red-arrow.svg';

import type { Props } from './types';

function DropdownSection({ title = '', children }: Props) {
  const [shown, setShown] = useState(false);

  function handleWrapperClick() {
    setShown(!shown);
  }

  return (
    <div className="rounded-md p-6 shadow-xl">
      <div className="flex cursor-pointer select-none justify-between gap-8" onClick={handleWrapperClick}>
        <h2 className="text-2xl font-bold max-sm:text-xl">{title}</h2>
        <RedArrowIcon className={cn('flex shrink-0', { 'rotate-180': shown })} />
      </div>
      {shown && <div className="mt-6 flex flex-col gap-6">{children}</div>}
    </div>
  );
}

export default DropdownSection;
