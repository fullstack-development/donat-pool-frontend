import styled, { css } from 'styled-components';

import { type Props } from './types';

const getHoverAndDisabled = (primaryColor, secondaryColor) => {
  return css`
    :disabled {
      pointer-events: none;
    }
  `;
};

const getPrimaryStyles = (primaryColor, secondaryColor) => css`
  font-size: 16px;
  padding: 10px 16px;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-weight: bold;
  line-height: 133%;

  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  background: ${({ theme }) =>
    theme.colors[primaryColor] ? theme.colors[primaryColor] : theme.colors.red};
  box-shadow: -4px 4px 0px
    ${({ theme }) =>
      theme.colors[secondaryColor]
        ? theme.colors[secondaryColor]
        : theme.colors.red};

  &:active {
    transform: translate(-4px, 4px);
    box-shadow: none;
  }
`;

const getSecondaryStyles = (primaryColor, secondaryColor) => css`
  position: absolute;
  font-size: 32px;
  padding: 34px 90px;
  font-family: 'Rammetto One', Arial, sans-serif;

  &::before {
    position: absolute;
    content: '';
    transition: all 0.5s;
    bottom: -21.8px;
    height: 22px;
    width: 100%;
    left: -11.3px;
    transform: skewX(-45deg);
    background-color: ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[secondaryColor]
        : theme.colors.red};
  }

  &::after {
    position: absolute;
    content: '';
    transition: all 0.5s;
    left: -22px;
    height: 100%;
    width: 22px;
    bottom: -11.3px;
    transform: skewY(-45deg);
    background-color: ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[secondaryColor]
        : theme.colors.red};
  }

  &:active {
    margin-left: -15px;
    margin-top: 15px;
    &::before {
      bottom: -7px;
      height: 7px;
      left: -4px;
    }

    &::after {
      left: -7px;
      width: 7px;
      bottom: -4px;
    }
  }

  &:hover {
    ${getHoverAndDisabled(primaryColor, secondaryColor)};
  }
`;

const getStyles = ({
  primaryColor,
  secondaryColor,
  fontColor,
  width,
  isDisabled,
  themeType,
}) =>
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    min-width: 100px;
    max-width: 320px;
    line-height: 94%;
    cursor: pointer;
    color: ${({ theme }) =>
      theme.colors[fontColor] ? theme.colors[fontColor] : theme.colors.red};
    background-color: ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.yellow};
    border: none;
    transition: all 0.5s;
    text-decoration: none;
    ${getHoverAndDisabled(primaryColor, secondaryColor)}
    ${themeType === 'primary' &&
    getPrimaryStyles(primaryColor, secondaryColor)};
    ${themeType === 'secondary' &&
    getSecondaryStyles(primaryColor, secondaryColor)};
  `;

const StyledButton = styled.button<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  themeType: Props['themeType'];
  width: Props['width'];
  isDisabled: boolean;
}>`
  ${({
    primaryColor,
    secondaryColor,
    fontColor,
    width,
    isDisabled,
    themeType,
  }) =>
    getStyles({
      primaryColor,
      secondaryColor,
      fontColor,
      width,
      isDisabled,
      themeType,
    })};
`;

const LinkWrapper = styled.div<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  themeType: Props['themeType'];
  isDisabled: boolean;
  width: Props['width'];
}>`
  a {
    ${({
      primaryColor,
      secondaryColor,
      fontColor,
      width,
      isDisabled,
      themeType,
    }) =>
      getStyles({
        primaryColor,
        secondaryColor,
        fontColor,
        width,
        isDisabled,
        themeType,
      })};
  }
`;

const Wrapper = styled.div<{
  themeType: NonNullable<Props['themeType']>;
}>`
  ${({ themeType }) =>
    themeType === 'secondary' && 'padding-left: 22px; padding-bottom: 22px;'}
  width: ${({ themeType }) => themeType === 'secondary' && '345px'};
  height: ${({ themeType }) => themeType === 'secondary' && '150px'};
`;

export { StyledButton, LinkWrapper, Wrapper };
