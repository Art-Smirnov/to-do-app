import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

interface TasksState {
  todos: Todo[];
}

const initialState: TasksState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Omit<Todo, 'id' | 'status'>>) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        status: false
      });
    },
    toggleComplete(state, action: PayloadAction<Todo>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) {
        toggledTodo.status = !toggledTodo.status;
      }
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    }
  }
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
