
import { IndexActionTypes } from '../../types/index';
export const setName = (name: string) => {
  return {
    type: IndexActionTypes.SET_NAME,
    payload: name,
  };
};