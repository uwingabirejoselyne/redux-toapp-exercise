import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoComplete, deleteTodo } from '../reducers/todoReducers';
import { FaTrash } from 'react-icons/fa';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleComplete = (index) => {
    dispatch(todoComplete({ index }))
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo({ index }))
  };

  return (
    <div className="w-1/2 mt-12">
      {todos.map((item, i) => (
        <div key={i} className={`flex flex-row justify-between items-center ${item.completed ? 'bg-green-100' : ''}`}>
          <div className='py-3 flex flex-row justify-center items-center gap-4'>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleComplete(i)}
              className="mr-2"
            />
            <p className={item.completed ? 'line-through' : ''}>{item.text}</p>
          </div>
          <FaTrash className='text-red-500' onClick={() => handleDelete(i)}/>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
