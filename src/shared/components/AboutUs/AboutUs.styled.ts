import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 80px;
  }
`;

const TeamImageWrapper = styled.div`
  position: relative;
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;
const TeamImage = styled.img`
  width: 100%;
  max-width: 1070px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;

const StackTitle = styled.div`
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 50px;
`;

const Stack = styled.div`
  margin-bottom: 40px;
`;

const StackImg = styled.img`
  &:not(:first-child) {
    margin-top: -30px;
  }
`;

export {
  Wrapper,
  TeamImageWrapper,
  TeamImage,
  ButtonWrapper,
  StackTitle,
  Stack,
  StackImg,
};
