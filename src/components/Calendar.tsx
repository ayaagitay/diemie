import { monthGrid } from "@/lib/dates"

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
export function Calendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const grid = monthGrid(year, month);
  const title = now.toLocaleString('en', {month: 'long', year: 'numeric'});
  return (
    <section>
      <h2 className="mb-2 font-medium">{title}</h2>
    <div className="grid grid-cols-7 gap-1 text-center text-sm">
      {WEEKDAYS.map((weekday, i) => (
        <span key={i} className="text-stone-400">
          {weekday}
        </span>
      ))}
      {grid.map((day, i) => (
        day === null ? (
          <span key={i}/> 
        ) : (
          <button key={i} className={`aspect-square rounded-full  ${day === today ? 'bg-stone-800 text-white' : 'hover:bg-stone-200'}`}>{day}</button>
        )
      ))}
    </div>
    </section>
  )
}