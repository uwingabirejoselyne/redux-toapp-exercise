import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO', (text) => ({
  payload: { text },
}));

export const editTodo = createAction('EDIT_TODO', ({index, text}) => ({
  payload: { index, text },
}));

export const todoComplete = createAction('TODO_COMPLETE', (index) => ({
  payload: { index },
}));

export const deleteTodo = createAction('DELETE_TODO', (index) => ({
  payload: { index },
}));
