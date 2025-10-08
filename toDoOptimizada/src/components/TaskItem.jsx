import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li>
      <span>
        <h3>{task.title}</h3>
        <hr/>
        {task.description}
        <p>{task.completed ? "Eguro, completada" : "Pendiente"}</p>
      </span>
    </li>
  );
};
function EliminarTarea({ task, onDelete }) {
    return (
        <li>
            <span>{task.title}</span> - <em>{task.description}</em>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
}

export default TaskItem;

