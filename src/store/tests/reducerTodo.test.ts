import { TodosActionTypes, TodosAction } from '../../types/todo';
import { initialState, todosReducer } from '../reducers/todoReducer';

describe('testing todo reducer', () => {
  test('CHANGE_VALUE', () => {
    const action: TodosAction = {
      type: TodosActionTypes.CHANGE_VALUE,
      payload: 'Name',
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      value: action.payload,
    });
  });

  test('SET_TODO', () => {
    const action: TodosAction = {
      type: TodosActionTypes.SET_TODO,
      payload: ['Name', Date.now()],
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: [
        ...initialState.todos,
        {
          title: action.payload[0],
          completed: false,
          editClicked: false,
          id: action.payload[1],
        },
      ],
    });
  });

  test('DELETE_TODO', () => {
    const action: TodosAction = {
      type: TodosActionTypes.DELETE_TODO,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 567,
        },
      ],
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });

  test('UPDATE_TODO_TITLE', () => {
    const action: TodosAction = {
      type: TodosActionTypes.UPDATE_TODO_TITLE,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 567,
        },
      ],
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });

  test('EDIT_CLICK', () => {
    const action: TodosAction = {
      type: TodosActionTypes.EDIT_CLICK,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 567,
        },
      ],
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });

  test('SET_IS_COMPLETED', () => {
    const action: TodosAction = {
      type: TodosActionTypes.SET_IS_COMPLETED,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 567,
        },
        {
          title: 'fffaaa',
          completed: true,
          editClicked: true,
          id: 343,
        },
        {
          title: 'ffaa',
          completed: false,
          editClicked: true,
          id: 567,
        },
      ],
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      isCompleted: {
        notCompleted: [action.payload[2]],
        alreadyCompleted: [action.payload[0], action.payload[1]],
      },
    });
  });

  test('SET_FILTER', () => {
    const action: TodosAction = {
      type: TodosActionTypes.SET_FILTER,
      payload: 'completed',
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      filterCompleted: action.payload,
    });
  });

  test('COMPLETE_TODO', () => {
    const action: TodosAction = {
      type: TodosActionTypes.COMPLETE_TODO,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 567,
        },
      ],
    };
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });
});