import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoReducers';
import { FaPlus } from 'react-icons/fa';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const createTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(addTodo({ text: inputValue }));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={createTodo} className='container flex flex-col mt-32 text-center mx-auto'>
      <div className='flex flex-row justify-between w-1/2 shadow-xl px-10 py-3 rounded-full'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Add your todo'
          className='focus:outline-none'
        />
        <button type="submit">
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
