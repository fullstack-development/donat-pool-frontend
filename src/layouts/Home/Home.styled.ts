import styled from 'styled-components';

import {
  getLargeLayoutPadding,
  getMediumLayoutPadding,
  getSmallLayoutPadding,
} from 'shared/styles/mixins';

const Wrapper = styled.div``;

const DonutsWrapper = styled.div`
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndDescription = styled.div`
  font-family: 'Rammetto One', Arial, sans-serif;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  padding-left: 400px;
  ${() => getLargeLayoutPadding()}

  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
    align-items: center;
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const Title = styled.h1`
  font-size: 180px;
  line-height: 111%;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 10px;

  -webkit-text-stroke: 10px ${({ theme }) => theme.colors.yellow};
  @media (max-width: 1280px) {
    font-size: 120px;
    -webkit-text-stroke: 7px ${({ theme }) => theme.colors.yellow};
  }
  @media (max-width: 1100px) {
    font-size: 96px;
    -webkit-text-stroke: 5px ${({ theme }) => theme.colors.yellow};
  }
  @media (max-width: 500px) {
    font-size: 56px;
    -webkit-text-stroke: 3px ${({ theme }) => theme.colors.yellow};
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 96px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.green};
  max-width: 1000px;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 1300px) {
    font-size: 56px;
    width: 70%;
  }
  @media (max-width: 1100px) {
    font-size: 48px;
    width: 70%;
  }
  @media (max-width: 500px) {
    font-size: 32px;
    width: 70%;
  }
`;

const DescriptionPart1 = styled.div``;
const DescriptionPart2 = styled.div`
  align-self: end;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 90px;
`;

const WavesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const InitialLoadingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1500px;
  background: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  @media (max-width: 1100px) {
    height: 100vh;
  }
`;

const MainWrapper = styled.div<{
  backgroundColor: 'green' | 'red' | 'black' | 'yellow' | 'blue';
}>`
  width: 100%;
  background: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]
      ? theme.colors[backgroundColor]
      : theme.colors.green};
`;

const MainInner = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const HowItWorksItemsWrapper = styled.div`
  padding-left: 400px;
  padding-bottom: 80px;
  ${() => getLargeLayoutPadding()}
  @media (max-width: 1100px) {
    margin-bottom: 50px;
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const WhyChooseUsWrapper = styled.div`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;
  padding-top: 0;
  padding-bottom: 160px;
  background-image: url('img/section-cat.svg');
  background-position: 0 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.red};
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const AboutUsWrapper = styled.div`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.colors.yellow};
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const NavWrapper = styled.nav<{ windowScroll; windowWidth }>`
  position: fixed;
  left: ${({ windowWidth }) => (windowWidth - 1920) / 2 + 90}px;
  top: 90px;
  z-index: 2;

  ${({ windowScroll }) =>
    windowScroll > 10 ? 'display: block' : 'display: none'};

  @media (max-width: 1920px) {
    left: 90px;
  }
  @media (max-width: 1100px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

const RoadmapWrapper = styled.div`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

export {
  InitialLoadingWrapper,
  Wrapper,
  DonutsWrapper,
  Inner,
  TitleAndDescription,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  MainWrapper,
  MainInner,
  NavWrapper,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  HowItWorksItemsWrapper,
};
