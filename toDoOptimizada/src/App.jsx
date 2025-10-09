import TaskForm from './components/TaskForm'
import { React, useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import { DisplayModeContext, DisplayModeProvider } from './components/DisplayModeContext'

function App() {
  return (
    <>
    <div className='container' style={{ margin: "20px", fontFamily: "Arial, sans-serif", listStyleType: "none"}}>
      <h1>📝 ToDo List</h1>
      <DisplayModeProvider>
        <TaskList />
      </DisplayModeProvider>
    </div>
  </>
  );
};

export default App;
