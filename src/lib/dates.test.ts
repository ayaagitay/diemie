import { describe, it, expect } from 'vitest';
import { keyOf, fromKey, daysInMonth, firstWeekday, monthGrid} from './dates';

describe('dates', () => {
  it('formats a local date', () => {
    expect(keyOf(new Date(2026, 10, 1))).toBe('2026-11-01');
  });

  it('keeps the right day just after midnight', () => {
    expect(keyOf(new Date(2026, 10, 1, 0, 30))).toBe('2026-11-01');
  });

  it('round-trips a key', () => {
    expect(keyOf(fromKey('2026-02-09'))).toBe('2026-02-09');
  });

  it('knows month lengths, including leap years', () => {
    expect(daysInMonth(2026, 1)).toBe(28);
    expect(daysInMonth(2028, 1)).toBe(29);
    expect(daysInMonth(2026, 10)).toBe(30);
  });

  it('finds the weekday of the 1st', () => {
    expect(firstWeekday(2026, 10)).toBe(6);
    expect(firstWeekday(2028, 1)).toBe(1);
  });

  it('puts 6 blanks before a month starting on Sunday', () => {
    const grid = monthGrid(2026, 10);
    expect(grid.slice(0,6)).toEqual([null, null, null, null, null, null]);
    expect(grid[6]).toBe(1);
  });

  it('a month that starts on Monday has no blanks', () => {
    const grid = monthGrid(2026, 5);
    expect(grid[0]).toBe(1);
  });

  it('puts 1 blanks before a leap-year February month starting on Tuesday', () => {
    const grid = monthGrid(2028, 1);
    expect(grid.slice(0,1)).toEqual([null]);
    expect(grid[1]).toBe(1);
  });
});