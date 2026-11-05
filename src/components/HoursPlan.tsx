import {pad} from "@/lib/dates";

type Props = { date: string };

export function HoursPlan({date}: Props) {
  const hours: number[] = [];
  for (let i=0; i<24; i++) {
    hours.push(i);
  }
  return (
    <section>
      <h2 className="mb-2 font-medium">Plan · {date}</h2>
      <ul>
        {hours.map(hour => (
          <li key={hour} className="flex gap-3 border-b border-stone-200 py-1">
            <span className="w-12 text-stone-400">
              {pad(hour)}:00
            </span>
            <input className="flex-1 bg-transparent outline-none" />
          </li>
        ))}
      </ul>
    </section>
  )
}