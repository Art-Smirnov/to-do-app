import React from 'react';
import { Todo } from '../types/Todo';

interface ModalProps {
  todo: Todo;
  onClose: () => void;
  onStatusChange: (id: string) => void;
}

const Modal: React.FC<ModalProps> = ({ todo, onClose, onStatusChange }) => {
  const handleStatusChange = () => {
    onStatusChange(todo.id);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{todo.title}</h2>
        <h3>Description:</h3>
        <p>{todo.description}</p>
        <label className="modal-status">
          Status:
          <input
            type="checkbox"
            checked={todo.status}
            onChange={handleStatusChange}
          />
        </label>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
