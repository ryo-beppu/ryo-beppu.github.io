import { Reducer } from 'redux';
import { ActionTypes } from './action';

export interface State {
  isFetching: boolean;
  chapter: string;
}

const initalState: State = {
  isFetching: false,
  chapter: '',
};

export const reducer: Reducer<State> = (state: State = initalState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_STATE:
      return {
        ...state,
        chapter: action.chapter,
      };
    default:
      return state;
  }
};
