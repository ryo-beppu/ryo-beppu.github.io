import React from 'react';
import styled from 'styled-components';
import { Button } from './button';

type CurrentTab =
  | 'portforio'
  | 'gameUI'
  | 'commingSoon';

const items: {
  isEnabled: boolean;
  label: string;
  tabId: CurrentTab;
  chapter: string;
  fontSize: number;
  url: string;
}[] = [
  {
    isEnabled: true, label: 'Portforio', tabId: 'portforio', chapter: '', fontSize: 48, url: 'ryo226.portfolio/',
  },
  {
    isEnabled: false, label: 'css de gameUI', tabId: 'gameUI', chapter: '', fontSize: 46, url: '',
  },
  {
    isEnabled: false, label: 'Comming Soon...', tabId: 'commingSoon', chapter: '', fontSize: 40, url: '',
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
        <Button
          key={index.toString()}
          isEnabled={item.isEnabled}
          text={item.label}
          fonSize={item.fontSize}
          order={index}
          url={item.url}
        />
      ))}
    </ButtonWrapper>
  </TopContentWrapper>
);
