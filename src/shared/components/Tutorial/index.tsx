'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ThirdButton } from '@/shared/components';

import { DATA } from './data';

function Tutorial() {
  const [shown, setShown] = useState(true);

  function handleWatchTutorialButtonClick() {
    setShown(!shown);
  }

  return (
    <div id="tutorial">
      <ThirdButton
        platformBorderTheme="red"
        backgroundTheme="green"
        textTheme="blue"
        arrowTheme="blue"
        arrowIsUp={shown}
        onClick={handleWatchTutorialButtonClick}
      >
        Watch the tutorial
      </ThirdButton>
      {shown && (
        <div className="mt-15">
          {DATA.map(({ order, title, src, description }) => (
            <div className="mb-[5.375rem] max-md:mb-10" key={order}>
              <div className="mb-2 text-xl font-bold text-red">{order}</div>
              <div className="mb-6 font-rammetto-one text-xl/[120%] text-black">{title}</div>
              <div className="flex gap-[1.875rem] max-2xl:flex-col">
                <Image
                  className="shadow-[0.25rem_0.25rem_0_0_theme(colors.red.DEFAULT)}]
                    w-full
                    max-w-[40.625rem]
                    shrink-0
                    rounded-md
                    border-[0.75rem]
                    border-yellow"
                  src={src}
                  alt="tutorial step"
                />
                <ul className="m-0 list-disc pl-5">
                  {description.map((item) => (
                    <li
                      className="mb-2.5 text-sm [&>a]:text-blue [&>a]:underline"
                      key={item}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tutorial;
