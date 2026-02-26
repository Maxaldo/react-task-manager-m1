import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
