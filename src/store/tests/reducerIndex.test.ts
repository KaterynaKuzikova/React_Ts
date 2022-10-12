import { IndexActionTypes, IndexAction } from '../../types/index';
import { indexReducer, initialState } from '../reducers/index';

test('SET_NAME', () => {
	const action: IndexAction = {
		type: IndexActionTypes.SET_NAME,
		payload: 'Name'
	}
	expect(indexReducer(initialState, action)).toEqual({
		name: 'Name'
	});
})