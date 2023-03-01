import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Todo } from '../types/Todo';
import TodoTableItem from './TodoTableItem';

const TodoTable: React.FC = () => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos.todos);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, title, description, status }) => (
          <TodoTableItem
            key={id}
            id={id}
            description={description}
            status={status}
            title={title}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
