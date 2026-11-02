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

export type Mood = {
  id: number;
  name: string;
  color: string;
};
