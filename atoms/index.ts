import { atom } from 'jotai';

export const searchName = atom('');

export const hemisphere = atom<'north' | 'south'>('north');

const now = new Date();
const currentMonth = (now.getMonth() + 1) as MonthRange;
export const searchMonth = atom<MonthRange | -1>(currentMonth);

const currentHour = now.getHours() as TimeRange;
export const searchHour = atom<TimeRange | -1>(currentHour);

export const dirPrice = atom<'asc' | 'desc'>('asc');
