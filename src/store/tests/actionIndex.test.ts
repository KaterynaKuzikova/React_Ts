import { IndexActionTypes } from '../../types/index';
import { setName } from '../action-creators/index';

test('SET_NAME', () => {
  const name: string = 'Name';
  expect(setName(name)).toEqual({
    type: IndexActionTypes.SET_NAME,
    payload: name,
  });
});