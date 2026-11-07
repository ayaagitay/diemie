import { useState } from "react";
import type { Task } from "@/types"

type Props = { date: string };

const START_TASKS: Task[] = [
  { id: '1', text: '', done: false },
  { id: '2', text: '', done: false },
  { id: '3', text: '', done: false },
]

export function DayPanel({date}: Props) {
  const [tasks, setTasks] = useState<Task[]>(START_TASKS)

  function addTask() {
    const newTask: Task = {id: String(Math.floor(Date.now() / 1000)), text: '', done: false};
    setTasks([...tasks, newTask])
  }

  return (
    <section className="flex flex-col gap-6">
      <p className="text-sm text-stone-400">{date}</p>
      <div>
        <h2 className="mb-2 font-medium">Tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex items-center gap-3 border-b border-stone-200 py-1">
              <span className="text-stone-400">•</span>
              <input type="text" className="flex-1 bg-transparent outline-none" />
            </li>
          ))}
        </ul>
        <button onClick={addTask} className="mt-2 text-stone-400 hover:text-stone-800">+ Add task</button>
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
