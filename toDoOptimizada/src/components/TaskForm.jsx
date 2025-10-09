import { useRef } from "react"
import { useState } from "react";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const inputRef = useRef(null);
    const url = "http://localhost:3000/tasks/";


    const focusInput = () => {
        inputRef.current && inputRef.current.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title: title,
            description: description,
            priority: priority,
            completed: false
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask)
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log("Tarea creada:", data);

            setTitle("");
            setDescription("");

            focusInput();

        } catch (error) {
            console.error("Error al crear la tarea:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    ref={inputRef}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input type="checkbox" 
                    onChange={(e) => setPriority(e.target.value)}
                    value="high"/> Prioridad
                <button type="submit">Agregar Tarea</button>
            </form>
        </div>
    )
}

export default TaskForm;