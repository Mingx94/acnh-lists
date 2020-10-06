import { atom, useAtom, WritableAtom } from 'jotai';
import { SetStateAction, useMemo } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

export const hemisphere = atom<'north' | 'south'>('north');

export const searchMonth = atom<MonthRange | -1>(-1);

export const searchHour = atom<TimeRange | -1>(-1);

export const dirPrice = atom<'asc' | 'desc'>('asc');

export const createSearchAtom = () => atom('');

export const useFilteredList = (
  list: Creature[],
  searchName: WritableAtom<string, SetStateAction<string>>
) => {
  const [name, setSearch] = useAtom(searchName);
  const [month] = useAtom(searchMonth);
  const [hemis] = useAtom(hemisphere);
  const [hour] = useAtom(searchHour);
  const [priceDir] = useAtom(dirPrice);

  const filteredList = useMemo(() => {
    return list
      .filter(
        ({
          name: { nameTWzh },
          availability: { monthArrayNorthern, monthArraySouthern, timeArray },
        }) => {
          const n = nameTWzh.includes(name);
          const mthArray =
            hemis == 'north' ? monthArrayNorthern : monthArraySouthern;
          const m = month != -1 ? mthArray.includes(month) : true;
          const h = hour != -1 ? timeArray.includes(hour) : true;

          return n && m && h;
        }
      )
      .sort((a, b) => {
        return priceDir == 'asc' ? a.price - b.price : b.price - a.price;
      });
  }, [name, month, hemis, hour, priceDir]);

  return {
    filteredList,
    searchName: name,
    setSearch,
  };
};

type SetSearch = (update: SetStateAction<string>) => void | Promise<void>;
type SearchAtom = {
  setSearch: SetSearch;
  searchName: string;
};

const searchContext = createContext<SearchAtom>({
  searchName: '',
  setSearch: (() => undefined) as SetSearch,
});

export const SearchNameProvider = searchContext.Provider;

export const useSearchName = () =>
  useContextSelector(
    searchContext,
    (context) =>
      [context.searchName, context.setSearch] as [
        name: string,
        setSearch: SetSearch
      ]
  );
