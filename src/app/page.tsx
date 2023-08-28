'use client';

import { useEffect, useRef, useState } from 'react';

import { InitialLoading, LandingContent, LandingNav, Waves } from '@/shared/components';
import { useWindowSize, useWindowScroll } from '@/shared/hooks';
import { LandingSection } from '@/shared/types/common';

function Page() {
  const windowScroll = useWindowScroll();
  const { width: windowWidth } = useWindowSize();
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');
  const [mobileHeaderIsOpen, setMobileHeaderIsOpen] = useState(false);
  const [animationIsActive, setAnimationIsActive] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Donat.Pool';
  }, []);

  function handleMobileHeaderClick() {
    setMobileHeaderIsOpen((m) => !m);
  }

  function handleSectionClick(clickedSection: LandingSection) {
    setCurrentSection(clickedSection);
  }

  return (
    <div className="flex flex-col">
      <div className="relative">
        <InitialLoading windowScroll={windowScroll} animationIsActive={animationIsActive} />
        <div className="absolute bottom-0 w-full">
          <Waves />
        </div>
      </div>
      <LandingContent
        windowScroll={windowScroll}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setAnimationIsActive={setAnimationIsActive}
        ref={navRef}
      />
      <LandingNav
        currentSection={currentSection}
        windowScroll={windowScroll}
        windowWidth={windowWidth}
        open={mobileHeaderIsOpen}
        ref={navRef}
        animationIsActive={animationIsActive}
        handleIconClick={handleMobileHeaderClick}
        handleSectionClick={handleSectionClick}
      />
    </div>
  );
}

export default Page;
