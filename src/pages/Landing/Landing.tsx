import { useEffect, useState } from 'react';

import {
  AboutUs,
  Button,
  ContactUsSection,
  HowItWorksItems,
  InitialLoading,
  LandingNav,
  Roadmap,
  Waves,
  WhyChooseUs,
} from 'shared/components';
import { type CurrentLandingSection } from 'shared/types';

import {
  TitleAndDescription,
  DonutsWrapper,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  Wrapper,
  MainWrapper,
  MainInner,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  Inner,
  InitialLoadingWrapper,
  HowItWorksItemsWrapper,
} from './Landing.styled';

const Landing = () => {
  const [windowScroll, setWindowScroll] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSection, setCurrentSection] =
    useState<CurrentLandingSection>('home');
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(Math.round(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setWindowWidth(Math.round(window.innerWidth));
    };
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const section: Array<{
    title: CurrentLandingSection;
    top: number;
    bottom: number;
  }> = [
    { title: 'home', top: 0, bottom: 2233 },
    { title: 'how it works', top: 2233, bottom: 2880 },
    { title: 'why choose us', top: 2880, bottom: 3420 },
    { title: 'about us', top: 3420, bottom: 5440 },
    { title: 'roadmap', top: 5440, bottom: 6100 },
    { title: 'contact us', top: 6100, bottom: 6635 },
  ];

  useEffect(() => {
    console.log('windowScroll', windowScroll);
    section.forEach(({ title, top, bottom }) => {
      if (windowScroll > top && windowScroll < bottom) {
        setCurrentSection(title);
      }
    });
  }, [windowScroll]);

  const handleMobileHeaderClick = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
  };

  const handleSectionClick = (clickedSection: CurrentLandingSection) => {
    // setCurrentSection(clickedSection);
  };

  return (
    <Wrapper>
      <Inner>
        <DonutsWrapper>
          <InitialLoadingWrapper>
            <InitialLoading windowScroll={windowScroll} />
          </InitialLoadingWrapper>

          <WavesWrapper>
            <Waves />
          </WavesWrapper>
        </DonutsWrapper>

        <TitleAndDescription>
          <Title>
            Donat.
            <br />
            Pool —
          </Title>
          <Description>
            <DescriptionPart1>Give a little,</DescriptionPart1>
            <DescriptionPart2>help a lot</DescriptionPart2>
          </Description>
          <ButtonWrapper>
            <Button themeType="secondary">Start using</Button>
          </ButtonWrapper>
        </TitleAndDescription>

        <Waves color="green" backgroundColor="blue" />

        <MainWrapper backgroundColor="green">
          <MainInner>
            <HowItWorksItemsWrapper>
              <HowItWorksItems />
            </HowItWorksItemsWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="red" backgroundColor="green" />

        <MainWrapper backgroundColor="red">
          <MainInner>
            <WhyChooseUsWrapper>
              <WhyChooseUs />
            </WhyChooseUsWrapper>
          </MainInner>
        </MainWrapper>

        <MainWrapper backgroundColor="yellow">
          <MainInner>
            <AboutUsWrapper>
              <AboutUs />
            </AboutUsWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="black" backgroundColor="yellow" />

        <MainWrapper backgroundColor="black">
          <MainInner>
            <RoadmapWrapper id="roadmap">
              <Roadmap />
            </RoadmapWrapper>
          </MainInner>
        </MainWrapper>

        <MainWrapper backgroundColor="blue">
          <MainInner>
            <ContactUsSection />
          </MainInner>
        </MainWrapper>

        <LandingNav
          currentSection={currentSection}
          windowScroll={windowScroll}
          windowWidth={windowWidth}
          handleIconClick={handleMobileHeaderClick}
          handleSectionClick={handleSectionClick}
          isOpen={isMobileHeaderOpen}
        />
      </Inner>
    </Wrapper>
  );
};

export default Landing;