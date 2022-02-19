import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  animation: ${fadeIn} 1s linear ${(props) => (`${props.order}`)}s forwards, ${move} 1s linear ${(props) => (`${props.order}`)}s forwards;
`;

const StyledText = styled.p<{ fontSize: number }>`
  color:#C4C4C4;
  font-size: ${(props) => (`${props.fontSize}px`)};
`;

const StyledSvg = styled.svg`
  position: absolute;
  width:311px;
  height:327px;
  fill-opacity:0;
  &:hover{
    fill-opacity:0.4;
    fill: #3E3D3D;
  }
`;

interface Props {
  text: string;
  fonSize:number;
  order: number;
}

export const Button: React.FC<Props> = ({ text, fonSize, order }) => (
  <ButtonWrapper order={(order + 1) * 0.5} onClick={() => console.log('aaa')}>
    <StyledText fontSize={fonSize}>
      {text}
    </StyledText>
    <StyledSvg viewBox="0 0 311 327" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="310" height="326" rx="19.5" stroke="#C4C4C4" />
    </StyledSvg>

  </ButtonWrapper>

);
