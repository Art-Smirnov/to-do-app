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
        id: (state.todos.length + 1).toString(),
        title: action.payload.title,
        description: action.payload.description,
        status: false
      });
    },
    toggleComplete(state, action: PayloadAction<Pick<Todo, 'id'>>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) {
        toggledTodo.status = !toggledTodo.status;
      }
    }
  }
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
