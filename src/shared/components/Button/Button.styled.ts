import styled, { css } from 'styled-components';

import { type Props } from './types';

const getStandardStyles = ({
  primaryColor,
  secondaryColor,
  size,
  fontColor,
}) => css`
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px' : '12px'} 16px;
  font-weight: bold;
  line-height: 133%;

  color: ${({ theme }) =>
    fontColor ? theme.colors[fontColor] : theme.colors.white};
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
  &:disabled {
    &:active {
      transform: none;
    }
    cursor: default;
    background-color: #ffc5cf;
    box-shadow: -4px 4px 0px #141414;
  }
`;

const getAccentStyles = ({
  primaryColor,
  secondaryColor,
  size,
  fontColor,
}) => css`
  position: absolute;
  font-size: 32px;
  width: 290px;
  height: ${size === 's' ? '97px' : '127px'};
  font-family: var(--rammetto-one-font);
  color: ${({ theme }) => theme.colors[fontColor]};
  background-color: ${({ theme }) =>
    theme.colors[primaryColor]
      ? theme.colors[primaryColor]
      : theme.colors.yellow};

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

  @media (max-width: 1100px) {
    padding: 20px 50px;
    font-size: 22px;
    max-width: 200px;
    height: ${size === 's' ? '70px' : '86px'};
  }
`;

const getDoubleBorderedStyles = (primaryColor, tertiaryColor, size) => css`
  position: relative;
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px 16px' : '10px 20px'};
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) => theme.colors[tertiaryColor]};
  color: ${({ theme }) =>
    theme.colors[primaryColor]
      ? theme.colors[primaryColor]
      : theme.colors.blue};
  border: 2px solid
    ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.blue};
  border-radius: 6px;
  transform-style: preserve-3d;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -6px;
    bottom: -6px;
    border: 2px solid
      ${({ theme }) =>
        theme.colors[primaryColor]
          ? theme.colors[primaryColor]
          : theme.colors.blue};
    border-radius: 6px;
    transform: translateZ(-1px);
    user-select: none;
  }
  &:active {
    &:before {
      left: 0;
      bottom: 0;
      opacity: 0;
    }
  }
  &:disabled {
    color: #828587;
    border: 2px solid #828587;
    pointer-events: none;
    &:before {
      border: 2px solid #828587;
    }
  }
`;

const getBorderedStyles = (primaryColor, isClickedTheme, size) => css`
  font-size: ${size === 's' ? '14px' : '16px'};
  padding: ${size === 's' ? '8px' : '10px'} 16px;
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) =>
    isClickedTheme ? theme.colors[primaryColor] : theme.colors.white};
  color: ${({ theme }) =>
    isClickedTheme ? theme.colors.white : theme.colors[primaryColor]};
  border: 2px solid
    ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.blue};
  border-radius: 6px;
`;

const getDashedStyles = (
  primaryColor,
  secondaryColor,
  tertiaryColor,
  size,
) => css`
  position: relative;
  display: flex;
  gap: 6px;
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px 40px 10px 16px' : '10px 40px 10px 20px'};
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) => theme.colors[tertiaryColor]};
  color: ${({ theme }) =>
    theme.colors[primaryColor]
      ? theme.colors[primaryColor]
      : theme.colors.blue};
  border: 2px dashed ${({ theme }) => theme.colors[primaryColor]};
  border-radius: 6px;
  transform-style: preserve-3d;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -6px;
    bottom: -6px;
    border: 2px dashed ${({ theme }) => theme.colors[secondaryColor]};
    border-radius: 6px;
    transform: translateZ(-1px);
    transition: all 0.5s;
    user-select: none;
  }
  &:disabled {
    color: #828587;
    border: 2px solid #828587;
    pointer-events: none;
    &:before {
      border: 2px solid #828587;
    }
  }
`;

const getStyles = ({
  primaryColor,
  secondaryColor,
  tertiaryColor,
  fontColor,
  width,
  themeType,
  isClickedTheme,
  size,
}) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width};
  line-height: 94%;
  cursor: pointer;
  border: none;
  transition: all 0.5s;
  text-decoration: none;
  ${themeType === 'standard'
    ? getStandardStyles({ primaryColor, secondaryColor, size, fontColor })
    : themeType === 'accent'
    ? getAccentStyles({ primaryColor, secondaryColor, size, fontColor })
    : themeType === 'double-bordered'
    ? getDoubleBorderedStyles(primaryColor, tertiaryColor, size)
    : themeType === 'dashed'
    ? getDashedStyles(primaryColor, secondaryColor, tertiaryColor, size)
    : getBorderedStyles(primaryColor, isClickedTheme, size)}
`;

const StyledButton = styled.button<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  tertiaryColor: NonNullable<Props['tertiaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  themeType: Props['themeType'];
  width: Props['width'];
  isClickedTheme: boolean;
  size: NonNullable<Props['size']>;
}>`
  ${({
    primaryColor,
    secondaryColor,
    tertiaryColor,
    fontColor,
    width,
    themeType,
    isClickedTheme,
    size,
  }) =>
    getStyles({
      primaryColor,
      secondaryColor,
      tertiaryColor,
      fontColor,
      width,
      themeType,
      isClickedTheme,
      size,
    })};
`;

const LinkWrapper = styled.div<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  tertiaryColor: NonNullable<Props['tertiaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  themeType: Props['themeType'];
  isDisabled: boolean;
  width: Props['width'];
  isClickedTheme: boolean;
  size: NonNullable<Props['size']>;
}>`
  a {
    ${({
      primaryColor,
      secondaryColor,
      tertiaryColor,
      fontColor,
      width,
      themeType,
      isClickedTheme,
      size,
    }) =>
      getStyles({
        primaryColor,
        secondaryColor,
        tertiaryColor,
        fontColor,
        width,
        themeType,
        isClickedTheme,
        size,
      })};
  }
`;

const getSecondaryWrapperStyles = (size) => css`
  padding-left: 22px;
  padding-bottom: 22px;
  height: ${size === 's' ? '97px' : '150px'};
  @media (max-width: 1100px) {
    height: 120px;
  }
`;

const Wrapper = styled.div<{
  themeType: NonNullable<Props['themeType']>;
  width: Props['width'];
  size: Props['size'];
}>`
  width: ${({ themeType, width }) =>
    themeType === 'accent' ? '290px' : width};

  transition: all 0.5s;
  ${({ themeType }) =>
    themeType === 'double-bordered' &&
    '&:active {transform: translate(-4px, 4px);}'};
  ${({ themeType, size }) =>
    themeType === 'accent' && getSecondaryWrapperStyles(size)};

  @media (max-width: 1100px) {
    width: ${({ themeType }) => themeType === 'accent' && '200px'};
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

export { StyledButton, LinkWrapper, Wrapper, ArrowWrapper };
