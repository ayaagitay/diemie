type Props = { date: string };

export function DayPanel({date}: Props) {
  const tasks = Array.from({length: 3}, (_, i) => <span key={i} className="text-stone-400">•</span>);
  return (
    <section className="flex flex-col gap-6">
      <p className="text-sm text-stone-400">{date}</p>
      <div>
        <h2 className="mb-2 font-medium">Tasks</h2>
        <ul>
          {tasks.map((task, i) => (
            <li key={i} className="flex items-center gap-3 border-b border-stone-200 py-1">
              {task}
              <input type="text" className="flex-1 bg-transparent outline-none" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-2 font-medium">Mood</h2>
      </div>
      <div>
        <h2 className="mb-2 font-medium">Diary</h2>
        <textarea className="w-full h-40 border border-stone-200 rounded p-2 resize-none outline-none focus:border-stone-400"></textarea>
      </div>
    </section>
  );
}
