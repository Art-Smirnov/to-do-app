import React from 'react';
import { Todo } from '../types/Todo';
import Ellipsis from './helpers/Ellipsis';

interface TodoTableItemProps {
  todo: Todo;
  onClick: (id: string) => void;
  onStatusChange: (id: string) => void;
}

const TodoTableItem: React.FC<TodoTableItemProps> = ({
  todo,
  onClick,
  onStatusChange
}) => {
  const handleTodoItemClick = () => {
    onClick(todo.id);
  };

  const handleStatusChange = () => {
    onStatusChange(todo.id);
  };

  return (
    <tr onClick={handleTodoItemClick}>
      <td>{todo.id}</td>
      <td>
        <Ellipsis text={todo.title} maxLength={15} />
      </td>
      <td>
        <Ellipsis text={todo.description} maxLength={15} />
      </td>
      <td>
        <input
          onClick={(e) => e.stopPropagation()}
          type="checkbox"
          checked={todo.status}
          onChange={handleStatusChange}
        />
      </td>
    </tr>
  );
};

export default TodoTableItem;
