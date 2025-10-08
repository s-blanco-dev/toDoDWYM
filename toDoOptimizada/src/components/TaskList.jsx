import React, { useEffect, useState, useMemo} from "react";
import TaskItem from "./TaskItem.jsx";
const API_URL = "http://localhost:3000/tasks"; 

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [highPriorityVisible, setHighPriorityVisible] = useState(false);

  const filteredTasks = useMemo(() => {
    if (highPriorityVisible) {
      return tasks.filter((t) => t.priority === "high");
    }
    else {
      return tasks;
    }
  }, [tasks, highPriorityVisible]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .catch((err) => console.error(err));
  }, []);

  const pendingTasksCount = useMemo(() => {
    return tasks.filter((t) => t.completed == false).length;
  }, [tasks])

  return (
    <div>
      <button onClick={() => setHighPriorityVisible(!highPriorityVisible)}>{highPriorityVisible ? "Mostrar todas las tareas" : "Mostrar solo tareas de alta prioridad"}</button>
    <h3>Tareas pendientes: {pendingTasksCount}</h3>
              <ul>
          {filteredTasks.map((task) => (
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
