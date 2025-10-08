import React, { useEffect, useState, useCallback } from "react";
import TaskItem from "./TaskItem.jsx";
const API_URL = "http://localhost:3000/tasks"; 

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Habemus Taream Sanctam</h1>
              <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </ul>
    </div>
  );
};

export  function EliminarTareas() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const handleDelete = useCallback((id) => {
        fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" })
            .then(() => setTasks(prev => prev.filter(task => task.id !== id)));
    }, []);

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
}



export default TaskList;
