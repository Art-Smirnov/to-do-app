import React from 'react';
import { Todo } from '../types/Todo';

const TodoTableItem: React.FC<Todo> = ({ id, title, description, status }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{status}</td>
    </tr>
  );
};

export default TodoTableItem;
