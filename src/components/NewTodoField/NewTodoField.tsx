import React from 'react';
import './NewTodoField.css';
import  TodoElement  from '../TodoElement/TodoElement';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const NewTodoField: React.FC<{
  onDelete: Function;
  onSubmit: Function;
  onTodo: Function;
  onEdit: Function;
  onChangeTitle: Function;
}> = ({ onDelete, onSubmit, onTodo, onEdit, onChangeTitle }) => {
  const todos = useTypedSelector((state) => state.todo.todos);

  return (
    <>
    {todos.length ? (
        <table className='todoField'>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '65%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <tbody>
            {todos.map((todo, index) => (
              <TodoElement
                key={todo.id}
                index={index}
                todo={todo}
                onDelete={onDelete}
                onSubmit={onSubmit}
                onTodo={onTodo}
                onEdit={onEdit}
                onChangeTitle={onChangeTitle}
              />
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default NewTodoField;