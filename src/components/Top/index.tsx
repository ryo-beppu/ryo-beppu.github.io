import React from 'react';
import styled from 'styled-components';
import { Button } from './button';

type CurrentTab =
  | 'portforio'
  | 'gameUI'
  | 'commingSoon';

const items: {
  label: string;
  tabId: CurrentTab;
  chapter: string;
  fontSize: number;
}[] = [
  {
    label: 'Portforio', tabId: 'portforio', chapter: '', fontSize: 48,
  },
  {
    label: 'css de gameUI', tabId: 'gameUI', chapter: '', fontSize: 46,
  },
  {
    label: 'Comming Soon...', tabId: 'commingSoon', chapter: '', fontSize: 40,
  },
];

const TopContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  background-color: #222222;
`;

const ButtonWrapper = styled.div`
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Top: React.FC = () => (
  <TopContentWrapper>
    <ButtonWrapper>
      {items.map((item, index) => (
        <Button key={index.toString()} text={item.label} fonSize={item.fontSize} />
      ))}
    </ButtonWrapper>
  </TopContentWrapper>
);
