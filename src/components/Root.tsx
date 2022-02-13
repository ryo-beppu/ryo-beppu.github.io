import React from 'react';
import { useSelector } from 'react-redux';
import { Top } from './Top';
import { State } from '../redux/reducer';

const ChangeComponent: React.FC = () => {
  const stateResult = useSelector(
    (state: State) => state.chapter,
  );

  switch (stateResult) {
    default:
      return <Top />;
  }
};

export const Root: React.FC = () => <ChangeComponent />;
