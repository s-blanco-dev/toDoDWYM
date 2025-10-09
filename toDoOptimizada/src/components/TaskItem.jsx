import React, { useContext } from "react";
import { DisplayModeContext } from "./DisplayModeContext";

const TaskItem = ({ task, onDelete, onComplete }) => {
  const {displayMode} = useContext(DisplayModeContext);

  return (
    <li className={`${task.priority} ${displayMode ? "compact" : ""} ${task.completed ? "completed" : ""}`}>
      {displayMode ? (
        // Modo compacto
        <span>
          <h4>{task.title}</h4>
          <button onClick={() => onComplete(task.id, task.completed)}>
            {task.completed ? "✔️" : "⏳"}
          </button>
        </span>
      ) : (
        // Modo detallado
        <span>
          <h3>{task.title}</h3>
          <hr />
          <p>{task.description}</p>
          <p>Prioridad: {task.priority}</p>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
          <button onClick={() => onComplete(task.id, task.completed)}>
            {task.completed ? "✅ Completada" : "Pendiente"}
          </button>
        </span>
      )}
    </li>
  );
};

export default TaskItem;

