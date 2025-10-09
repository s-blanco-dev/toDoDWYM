import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li>
      <span>
        <h3>{task.title}</h3>
        <hr/>
        {task.description}
        <p>Prioridad: {task.priority}</p>
        <p>{task.completed ? "Eguro, completada" : "Pendiente"}</p>
      </span>
    </li>
  );
};

export default TaskItem;

