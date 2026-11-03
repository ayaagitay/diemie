export function DayPanel() {
  const tasks = Array.from({length: 3}, (_, i) => <span>•</span>);
  return (
    <section>
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Mood</h2>
      </div>
      <div>
        <h2>Diary</h2>
        <textarea className="w-full h-40 border border-stone-200 rounded p-2 resize-none"></textarea>
      </div>
    </section>
  );
}