import { React, useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif", listStyleType: "none"}}>
      <h1>📝 ToDo List</h1>
      <TaskList />
    </div>
  );
};

export default App;
