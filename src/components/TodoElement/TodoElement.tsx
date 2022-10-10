import React, { ChangeEvent, MouseEvent } from 'react';
import './TodoElement.css';
import { Todo } from '../../types/todo';
import { completeTodo } from '../../store/action-creators/todo';
import { useDispatch } from 'react-redux';

const isCompleted = function isCompleted(completed: boolean): string {
  return completed ? 'line-through' : 'none';
}

const TodoElement: React.FC<{
  todo: Todo;
  index: number;
  onDelete: Function;
  onEdit: Function;
  onTodo: Function;
  onSubmit: Function;
  onChangeTitle: Function;
}> = ({ todo, index, onDelete, onEdit, onTodo, onSubmit, onChangeTitle }) => {
  const editClicked = todo.editClicked;
  const dispatch = useDispatch();

  function onEditBtn(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    onEdit(todo.id);
  }

  function onDeleteBtn(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    onDelete(todo.id);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    e.stopPropagation();
    const value = e.target.value;
    onChangeTitle(todo, value);
  }

  function onSubmitClick(e: ChangeEvent<HTMLFormElement>): void {
    e.stopPropagation();
    e.preventDefault();
    onSubmit(todo.id);
    if (todo.completed) {
      dispatch(completeTodo(todo.id));
    }
  }

  function onTodoClick(e: MouseEvent): void {
    e.stopPropagation();
    onTodo(todo);
  }

  return (
    <tr className='elem'>
      <td>{index + 1}</td>
      <td
        onClick={onTodoClick}
        style={{ textDecoration: isCompleted(todo.completed), cursor: 'pointer' }}
      >
        {editClicked ? (
          <form onSubmit={onSubmitClick}>
            <input
              type='text'
              onChange={onChange}
              value={todo.title}
              autoFocus
            />
          </form>
        ) : (
          <span>{todo.title}</span>
        )}
      </td>
      <td>
        <button onClick={onEditBtn}>
        </button>
      </td>
      <td>
        <button onClick={onDeleteBtn}>
        </button>
      </td>
    </tr>
  );
};

export default TodoElement;