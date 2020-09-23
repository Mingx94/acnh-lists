import { atom } from 'jotai';

export const searchName = atom('');

export const hemisphere = atom<'north' | 'south'>('north');

export const searchMonth = atom<MonthRange | -1>(-1);

export const searchHour = atom<TimeRange | -1>(-1);

export const dirPrice = atom<'asc' | 'desc'>('asc');
