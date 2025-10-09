import React from "react";

const TaskItem = ({ task, onDelete, onComplete }) => {
  return (
    <li>
      <span>
        <h3>{task.title}</h3>
        <hr/>
        {task.description}
        <p>Prioridad: {task.priority}</p>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
          <button onClick={() => onComplete(task.id, task.completed)}>
            <p>{task.completed ? "Eguro, completada" : "Pendiente"}</p>
          </button>

      </span>
    </li>
  );
};

export default TaskItem;

