import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { Todo } from '../types/Todo';
import TodoTableItem from './TodoTableItem';
import { toggleComplete } from '../store/todoSlice';
import Modal from './Modal';

const TodoTable: React.FC = () => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos.todos);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleTodoClick = (id: string) => {
    setSelectedTodoId(id);
  };

  const handleModalClose = () => {
    setSelectedTodoId(null);
  };

  const handleStatusChange = (id: string) => {
    dispatch(toggleComplete({ id }));
  };

  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);

  return (
    <>
      <table className="container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoTableItem
              key={todo.id}
              todo={todo}
              onClick={handleTodoClick}
              onStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
      {selectedTodo && (
        <Modal
          todo={selectedTodo}
          onStatusChange={handleStatusChange}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default TodoTable;
