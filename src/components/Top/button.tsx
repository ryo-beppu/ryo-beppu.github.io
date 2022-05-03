import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const move = keyframes`
  0%{
    transform: translateX(10px);
  }
  100%{
    transform: translateX(0px);
  }
`;

const ButtonWrapper = styled.button<{ order: number }>`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 311px;
  height: 327px;
  margin: 0px 30px 0px 0px;
  padding: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  opacity: 0;
  animation: ${fadeIn} 1s linear ${({ order }) => (`${order}`)}s forwards, ${move} 1s linear ${({ order }) => (`${order}`)}s forwards;
  z-index:3;
`;

const StyledText = styled.p<{ fontSize: number }>`
  color:#C4C4C4;
  z-index:2;
  font-size: ${({ fontSize }) => (`${fontSize}px`)};
`;

const StyledSvg = styled.svg<{ isEnabled: boolean }>`
  position: absolute;
  width:311px;
  height:327px;
  z-index:1;
  fill: ${({ isEnabled }) => (isEnabled ? '#222222' : '#111111')};

  ${({ isEnabled }) => isEnabled && css`
    &:hover {
      fill: #3E3D3D;
    }
  `};
`;

interface Props {
  isEnabled: boolean;
  text: string;
  fonSize: number;
  order: number;
  url: string;
}

export const Button: React.FC<Props> = ({
  isEnabled, text, fonSize, order, url,
}) => {
  const onClick = () => {
    if (isEnabled) {
      window.location.href = `https://ryo-beppu.github.io/${url}`;
    }
  };

  return (
    <ButtonWrapper
      order={(order + 1) * 0.5}
      type="button"
      onClick={onClick}
    >
      <StyledText fontSize={fonSize}>
        {text}
      </StyledText>
      <StyledSvg
        viewBox="0 0 311 327"
        xmlns="http://www.w3.org/2000/svg"
        isEnabled={isEnabled}
      >
        <rect x="0.5" y="0.5" width="310" height="326" rx="19.5" stroke="#C4C4C4" />
      </StyledSvg>
    </ButtonWrapper>
  );
};
