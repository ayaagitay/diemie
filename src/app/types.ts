export type Task = {
  id: string;
  text: string;
  done: boolean;
};

export type DayEntry = {
  date: string;
  diary: string;
  mood: number;
  tasks: Task[];
  hours: Record<number, string>;
}