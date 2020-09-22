import { atom } from 'jotai';

export const searchName = atom('');

export const hemisphere = atom<'north' | 'south'>('north');

const thisMonth = (new Date().getMonth() + 1) as MonthRange;
export const searchMonth = atom<MonthRange | null>(thisMonth);
