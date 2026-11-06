import { monthGrid, keyOf } from "@/lib/dates"

type Props = {
  selected: string;
  onSelect: (key: string) => void;
}
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
export function Calendar({selected, onSelect}: Props) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const todayKey = keyOf(now)
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