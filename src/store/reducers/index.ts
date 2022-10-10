import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todoReducer';
import { IndexAction, IndexActionTypes, IndexState } from '../../types/index';

export const rootReducer = combineReducers({
  todo: todosReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const initialState: IndexState = {
  name: '',
};
export const indexReducer = (
  state: IndexState = initialState,
  action: IndexAction
): IndexState => {
  switch (action.type) {
    case IndexActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};