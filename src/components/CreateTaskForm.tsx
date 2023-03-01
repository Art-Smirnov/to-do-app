import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { Todo } from '../types/Todo';

type FormValues = Omit<Todo, 'id' | 'status'>;

const CreateTaskForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    title: '',
    description: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};
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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={values.title}
          onChange={(event) =>
            setValues({ ...values, title: event.target.value })
          }
          style={errors.title ? { border: '1px solid red' } : {}}
        />
        {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
      </label>
      <label>
        Description:
        <input
          type="text"
          value={values.description}
          onChange={(event) =>
            setValues({ ...values, description: event.target.value })
          }
          style={errors.description ? { border: '1px solid red' } : {}}
        />
        {errors.description && (
          <div style={{ color: 'red' }}>{errors.description}</div>
        )}
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTaskForm;
