import React from "react";

const TaskItem = ({ task, onDelete  }) => {
  return (
    <li>
      <span>
        <h3>{task.title}</h3>
        <hr/>
        {task.description}
        <p>{task.completed ? "Eguro, completada" : "Pendiente"}</p>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>

      </span>
    </li>
  );
};


export default TaskItem;

