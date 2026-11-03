// import { Calendar } from '@/components/Calendar';
import { HoursPlan } from '@/components/HoursPlan';
// import { DayPanel } from '@/components/DayPanel';

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-medium">Diemie</h1>
      {/* <Calendar /> */}
      <HoursPlan />
      {/* <DayPanel /> */}
    </main>
  );
}
