export const pad = (n: number): string => String(n).padStart(2, '0');

export function keyOf(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function fromKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}


export function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}


export function firstWeekday(year: number, month: number): number {
  return (new Date(year, month, 1).getDay() + 6) % 7;
}