import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
