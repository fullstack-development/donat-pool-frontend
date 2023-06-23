import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 160px;
  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
`;

const Inner = styled.div`
  max-width: 620px;
`;

const PreviousPage = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 280%;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  &:before {
    display: block;
    content: url('/icons/arrow.svg');
    text-align: center;
    width: 40px;
    height: 40px;
    margin-right: 23px;
  }

  @media (max-width: 1200px) {
    position: static;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0 60px 0;
  @media (max-width: 1200px) {
    justify-content: start;
  }
  @media (max-width: 900px) {
    margin: 80px 0 32px 0;
  }
`;

const Title = styled.h1`
  ${h1};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Wrapper, Inner, PreviousPage, PageHeader, Title };
