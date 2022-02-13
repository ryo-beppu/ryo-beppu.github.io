import { Action, ActionCreatorsMapObject } from 'redux';

export enum ActionTypes {
  CHANGE_STATE = 'CHANGE_STATE',
}

export type ActionsType = Action<ActionTypes>;

export const ActionCreators: ActionCreatorsMapObject<ActionsType> = {
  changeState(data: string) {
    return {
      type: ActionTypes.CHANGE_STATE,
      chapter: data,
    };
  },
};
