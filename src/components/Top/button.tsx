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

const draw = keyframes`
  100% {
    stroke-dashoffset: 0;
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

// TODO: ${ButtonWrapper}:hoverが親要素のclassを拾ってしまうので切り替えができない
const EnabledSvg = styled.svg<{ order: number }>`
  position: absolute;
  width:311px;
  height:327px;
  z-index:1;
  fill: #222222;
  stroke-dasharray: 1240 1242;
  stroke-dashoffset: 1241;
  animation: ${draw} 1s ease-in-out ${({ order }) => (`${order}`)}s forwards;

  ${ButtonWrapper}:hover &{
      fill: #3E3D3D;
    }
`;

const DisabledSvg = styled.svg`
  position: absolute;
  width:311px;
  height:327px;
  z-index:1;
  fill: #111111;
  stroke-dasharray: 1240 1242;
  stroke-dashoffset: 1241;
  animation: ${draw} 1s ease-in-out ${({ order }) => (`${order}`)}s forwards;
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
      {isEnabled ? (
        <EnabledSvg
          viewBox="0 0 311 327"
          xmlns="http://www.w3.org/2000/svg"
          order={(order + 1) * 0.4}
        >
          <path
            width="310"
            height="326"
            stroke="#C4C4C4"
            d="M 19.5,0.5 L 291.5,0.5 A 19,19,0,0,1,310.5,19.5 L 310.5,307.5 A 19,19,0,0,1,291.5,326.5 L 19.5,326.5 A 19,19,0,0,1,0.5,307.5 L 0.5,19.5 A 19,19,0,0,1,19.5,0.5"
          />
        </EnabledSvg>
      ) : (
        <DisabledSvg
          viewBox="0 0 311 327"
          xmlns="http://www.w3.org/2000/svg"
          order={(order + 1) * 0.4}
        >
          <path
            width="310"
            height="326"
            stroke="#C4C4C4"
            d="M 19.5,0.5 L 291.5,0.5 A 19,19,0,0,1,310.5,19.5 L 310.5,307.5 A 19,19,0,0,1,291.5,326.5 L 19.5,326.5 A 19,19,0,0,1,0.5,307.5 L 0.5,19.5 A 19,19,0,0,1,19.5,0.5"
          />
        </DisabledSvg>
      )}
    </ButtonWrapper>
  );
};
