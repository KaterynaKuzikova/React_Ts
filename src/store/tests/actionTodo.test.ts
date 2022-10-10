import { TodosActionTypes, Todo } from '../../types/todo';
import {
  setTodo,
  changeValue,
  editClick,
  deleteTodo,
  updateTodoTitle,
  setIsCompleted,
  setFilter,
  completeTodo,
} from './../action-creators/todo';

describe('testing actions todos', () => {
  test('setTodo', () => {
    const value: [string, number] = ['aaa', Date.now()];
    expect(setTodo(value)).toEqual({
      type: TodosActionTypes.SET_TODO,
      payload: value,
    });
  });

  test('changeValue', () => {
    const value: string = 'ddd';
    expect(changeValue(value)).toEqual({
      type: TodosActionTypes.CHANGE_VALUE,
      payload: value,
    });
  });

  test('deleteTodo', () => {
    const todos: Todo[] = [
      { title: 'ddd', completed: true, editClicked: false, id: 555 },
    ];
    expect(deleteTodo(todos)).toEqual({
      type: TodosActionTypes.DELETE_TODO,
      payload: todos,
    });
  });

  test('updateTodoTitle', () => {
    const todos: Todo[] = [
      { title: 'ddd', completed: true, editClicked: false, id: 555 },
    ];
    expect(updateTodoTitle(todos)).toEqual({
      type: TodosActionTypes.UPDATE_TODO_TITLE,
      payload: todos,
    });
  });

  test('editClick', () => {
    const todos: Todo[] = [
      { title: 'ddd', completed: true, editClicked: false, id: 555 },
    ];
    expect(editClick(todos)).toEqual({
      type: TodosActionTypes.EDIT_CLICK,
      payload: todos,
    });
  });

  test('setIsCompleted', () => {
    const todos: Todo[] = [
      { title: 'ddd', completed: true, editClicked: false, id: 3 },
    ];
    expect(setIsCompleted(todos)).toEqual({
      type: TodosActionTypes.SET_IS_COMPLETED,
      payload: todos,
    });
  });

  test('setFilter', () => {
    const value: string = 'completed';
    expect(setFilter(value)).toEqual({
      type: TodosActionTypes.SET_FILTER,
      payload: value,
    });
  });

  test('completeTodo', () => {
    const todos: Todo[] = [
      { title: 'ddd', completed: true, editClicked: false, id: 3 },
    ];
    expect(completeTodo(todos)).toEqual({
      type: TodosActionTypes.COMPLETE_TODO,
      payload: todos,
    });
  });
});