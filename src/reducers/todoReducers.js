import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload.text, completed: false });
    },
    editTodo: (state, action) => {
      const { index, text } = action.payload;
      state.todos[index].text = text;
    },
    todoComplete: (state, action) => {
      const { index } = action.payload;
      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTodo: (state, action) => {
      const { index } = action.payload;
      state.todos = state.todos.filter((_, i) => i !== index);
    },
  },
});

export const { addTodo, editTodo, todoComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
