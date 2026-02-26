export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}
