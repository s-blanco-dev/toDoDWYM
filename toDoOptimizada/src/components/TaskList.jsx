import React, { useEffect, useState, useMemo, useCallback} from "react";
import TaskItem from "./TaskItem.jsx";
import TaskForm from "./TaskForm.jsx";
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

    const handleAddTask = useCallback((newTask) => {
        setTasks(prev => [...prev, newTask]);
    }, []);

  const handleDelete = useCallback((id) => { //Se usa callBack porque así cuando el "TaskItem" lo reciba como prop, no va a re-renderizarse, por lo que podrá usar la función
      fetch(`${API_URL}/${id}`, { method: "DELETE" })
          .then(() => setTasks(prev => prev.filter(task => task.id !== id)));
    }, []);

  const handleComplete = useCallback((id, estadoActual) => {
        fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !estadoActual })
        })
            .then(res => res.json())
            .then(() => {
                setTasks(prev =>
                    prev.map(task =>
                        task.id === id ? { ...task, completed: !estadoActual } : task
                    )
                );
            })
            .catch(err => console.error("Error al actualizar tarea:", err));
        }, []);

    const pendingTasksCount = useMemo(() => {
    return tasks.filter((t) => t.completed == false).length;
    }, [tasks])

  return (
    <div>
        <h1>Habemus Taream Sanctam</h1>
        <TaskForm onAddTask={handleAddTask} />
      <button onClick={() => setHighPriorityVisible(!highPriorityVisible)}>{highPriorityVisible ? "Mostrar todas las tareas" : "Mostrar solo tareas de alta prioridad"}</button>
    <h3>Tareas pendientes: {pendingTasksCount}</h3>
              <ul>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onComplete = {handleComplete}
            />
          ))}
        </ul>
    </div>
  );
};

export default TaskList;
