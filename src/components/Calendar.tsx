import { monthGrid, keyOf } from "@/lib/dates"
import { useState } from "react";

type Props = {
  selected: string;
  onSelect: (key: string) => void;
}
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
export function Calendar({selected, onSelect}: Props) {
  const now = new Date();
  const [view, setView] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const year = view.getFullYear();
  const month = view.getMonth();
  const todayKey = keyOf(now);
  const grid = monthGrid(year, month);
  const title = view.toLocaleString('en', {month: 'long', year: 'numeric'});

  return (
    <section>
      <div className="mb-2 flex items-center justify-between">
        <button onClick={() => setView(new Date(year, month-1, 1))}>‹</button>
        <h2 className="font-medium">{title}</h2>
        <button onClick={() => setView(new Date(year, month+1, 1))}>›</button>
      </div>
    <div className="grid grid-cols-7 gap-1 text-center text-sm">
      {WEEKDAYS.map((weekday, i) => (
        <span key={i} className="text-stone-400">
          {weekday}
        </span>
      ))}
      {grid.map((day, i) => {
        if (day === null) return <span key={i} />;
        const key = keyOf(new Date(year, month, day));
        let style = 'hover:bg-stone-200';
        if (key === selected) {
          style = 'bg-stone-800 text-white';
        } else if (key === todayKey) {
          style = 'ring-1 ring-stone-800';
        }

        return (
          <button 
          key={i} 
          onClick={() => onSelect(key)}
          className={`aspect-square rounded-full  
            ${style}`}>{day}</button>
        )
      })}
    </div>
    </section>
  )
}