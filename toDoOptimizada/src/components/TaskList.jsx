import React, { useEffect, useState } from "react";
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

export default TaskList;
