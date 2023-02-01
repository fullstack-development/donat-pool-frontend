import { type Theme } from '@mui/material';
import styled from 'styled-components';

import { baseContainer } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${baseContainer}
`;

const MainScreen = styled.div<{ theme: Theme }>`
  display: flex;
  min-height: 60vh;
  margin-top: 150px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Intro = styled.div`
  span {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Title = styled.h1`
  max-width: 500px;
  font-size: 70px;
  margin-bottom: 30px;
`;

const Description = styled.h2`
  max-width: 500px;
  font-size: 30px;
  line-height: 120%;
`;

const BigImg = styled.div`
  margin-left: 300px;
`;

const MainButtons = styled.div`
  display: flex;
  gap: 30px;
`;

const IntroInner = styled.div``;
const CardsWrapper = styled.div`
  margin: 40px 0;
`;

export {
  Wrapper,
  Title,
  Description,
  Intro,
  BigImg,
  MainButtons,
  IntroInner,
  MainScreen,
  CardsWrapper,
};
