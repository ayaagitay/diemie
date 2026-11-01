import { describe, it, expect } from 'vitest';
import { keyOf, fromKey, daysInMonth, firstWeekday } from './dates';

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
});