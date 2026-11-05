'use client';

import { useState } from 'react';
import { keyOf } from '@/lib/dates';

import { Calendar } from '@/components/Calendar';
import { HoursPlan } from '@/components/HoursPlan';
import { DayPanel } from '@/components/DayPanel';

export default function Home() {
  const [selected, setSelected] = useState(keyOf(new Date()));

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-medium">Diemie</h1>
      <div className='mt-6 grid gap-6 md:grid-cols-[16rem_1fr_20rem]'>
        <Calendar />
        <HoursPlan date={selected} />
        <DayPanel date={selected} />

      </div>

    </main>
  );
}
