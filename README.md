# Diemie

A calm daily planner and diary in one place. Each day has its own page, and you can open any past date to see what you planned and wrote.

I often forget things, and I want somewhere to write when my notebook isn't with me. Diemie is a private place to open, write, and look back on later.

> **Status:** early work in progress, aiming for v0.1. Nothing saves yet.

## What each day holds

- **Tasks:** three main tasks, with a button for more. Finished ones stay on their day, crossed out.
- **Hours:** a 24-hour plan, where each hour is an empty line to fill in.
- **Mood:** one of 12 little faces, which also colours that day on the calendar.
- **Diary:** an entry that saves as you type.

The calendar is on the left, the hours are in the middle, and tasks, mood and diary are on the right. On a phone they stack in one column.

## Principles

- **Private by default:** data stays on your device, with a backup option. No account needed.
- **Ship small, then improve:** extras wait on a "Not in v1" list.
- **Calm, ink-and-paper style,** with my own doodles for the mood faces.

## Built with

Next.js, React, TypeScript and Tailwind CSS. Saving will use IndexedDB with Dexie. Tests use Vitest, and the app will be hosted on Vercel.

## Running it locally

```bash
npm install
npm run dev     # open http://localhost:3000
npm test        # run the tests
```

## Roadmap

**v0.1**
- [x] Month calendar, 24-hour plan, and day panel
- [ ] Three-column layout
- [ ] Select a day and move between months
- [ ] Tasks, mood and diary that work
- [ ] Save everything on the device, with backup export and import
- [ ] Deploy

**Later**
- Moods settings tab
- Installable phone app with reminders ("what do I need to remember tomorrow?")
- Optional accounts with sync
- Drawing in the diary

## License

MIT

