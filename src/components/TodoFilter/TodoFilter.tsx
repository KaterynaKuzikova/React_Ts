import React, { MouseEvent } from 'react';
import { StyleButton } from '../../types/function';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './TodoFilter.css';

const completeBtn = function completeBtn(completed: string): StyleButton {
  if (completed === 'completed') {
    return {
      background: '#fcbfb7',
      color: '#334e58',
    };
  } else {
    return {
      background: '#b0b3c1',
      color: '#334e58',
    };
  }
}

const notCompleteBtn =  function notCompleteBtn(completed: string): StyleButton {
  if (completed === 'not completed') {
    return {
      background: '#fcbfb7',
      color: '#334e58',
    };
  } else {
    return {
      background: '#b0b3c1',
      color: '#334e58',
    };
  }
}

const TodoFilter: React.FC<{
  filterCompleteBtn: Function;
  filterNotCompleteBtn: Function;
}> = ({ filterCompleteBtn, filterNotCompleteBtn }) => {
  const { filterComplete, isCompleted } = useTypedSelector(
    (state) => state.todo
  );
  const { notComplete, alreadyCompleted } = isCompleted;

  function completedBtn(e: MouseEvent): void {
    e.stopPropagation();
    if (alreadyCompleted.length) {
      filterCompleteBtn();
    }
  }

  function notCompletedBtn(e: MouseEvent): void {
    e.stopPropagation();
    if (notComplete.length) {
      filterNotCompleteBtn();
    }
  }

  return (
    <div className='filter'>
      <div className='filter-buttons'>
        <button
          onClick={completedBtn}
          style={completeBtn(filterComplete)}
        >
          COMPLETED
        </button>
        <button
          onClick={notCompletedBtn}
          style={notCompleteBtn(filterComplete)}
        >
          NOT COMPLETED
        </button>
      </div>
      <div style={{ width: '100%' }}>
        {filterComplete === 'completed' ? (
          <div className='filtred'>
            {alreadyCompleted.map((todo, index) => (
              <span key={todo.id}>
                {index + 1}. {todo.title}
              </span>
            ))}
          </div>
        ) : null}
        {filterComplete === 'not completed' ? (
          <div className='filtred'>
            {notComplete.map((todo, index) => (
              <span key={todo.id}>
                {index + 1}. {todo.title}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TodoFilter;