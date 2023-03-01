import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { Todo } from '../types/Todo';
import { AppDispatch } from '../store/store';

type FormValues = Omit<Todo, 'id' | 'status'>;
type ErrorsType = { [key: string]: string };

const CreateTaskForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    title: '',
    description: ''
  });
  const [errors, setErrors] = useState<ErrorsType>({});
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: ErrorsType = {};

    if (!values.title) {
      newErrors.title = 'This field is empty';
    }

    if (!values.description) {
      newErrors.description = 'This field is empty';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setValues({ title: '', description: '' });
      dispatch(addTodo(values));
    }
  };

  return (
    <form className="container form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className={`
            form-input
            ${errors.title ? ' form-input--error' : ''}
          `}
          placeholder="Enter title"
          type="text"
          value={values.title}
          onChange={(event) =>
            setValues({ ...values, title: event.target.value })
          }
        />
        {errors.title && (
          <div className="form-input-error-message">{errors.title}</div>
        )}
      </label>
      <label>
        Description:
        <input
          className={`
            form-input
            ${errors.description ? ' form-input--error' : ''}
          `}
          placeholder="Enter description"
          type="text"
          value={values.description}
          onChange={(event) =>
            setValues({ ...values, description: event.target.value })
          }
        />
        {errors.description && (
          <div className="form-input-error-message">{errors.description}</div>
        )}
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTaskForm;
