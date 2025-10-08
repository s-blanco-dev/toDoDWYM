import React, { useEffect, useState, useCallback } from "react";
import TaskItem from "./TaskItem.jsx";
import EliminarTarea from "./TaskItem.jsx"
const API_URL = "http://localhost:3000/tasks";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .catch((err) => console.error(err));
  }, []);

  const handleDelete = useCallback((id) => { //Se usa callBack porque así cuando el "TaskItem" lo reciba como prop, no va a re-renderizarse, por lo que podrá usar la función
      fetch(`${API_URL}/${id}`, { method: "DELETE" })
          .then(() => setTasks(prev => prev.filter(task => task.id !== id)));
      }, []);

  return (
    <div>
      <h1>Habemus Taream Sanctam</h1>
              <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
            />
          ))}
        </ul>
    </div>
  );
};

export default TaskList;
