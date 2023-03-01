import React from 'react';
import CreateTaskForm from './components/CreateTaskForm';
import TodoTable from './components/TodoTable';
import './App.css';

function App() {
  return (
    <div>
      <CreateTaskForm />
      <TodoTable />
    </div>
  );
}

export default App;
