import { useLayoutEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import { toCamel } from 'convert-keys';

import axios from '~/utils/request';
import {
  hemisphere,
  dirPrice,
  searchHour,
  searchMonth,
  searchName
} from '~/atoms';

import CreatureCard from '~/components/CreatureCard';
import FilterName from '~/containers/FilterName';
import FilterMonth from '~/containers/FilterMonth';
import FilterHemis from '~/containers/FilterHemis';
import FilterHour from '~/containers/FilterHour';
import Sorting from '~/containers/Sorting';

export default function Home({ list }: { list: Fish[] }) {
  const [name] = useAtom(searchName);
  const [month, setMonth] = useAtom(searchMonth);
  const [hemisP] = useAtom(hemisphere);
  const [hour, setHour] = useAtom(searchHour);
  const [priceDir] = useAtom(dirPrice);

  useLayoutEffect(() => {
    const now = new Date();
    const currentMonth = (now.getMonth() + 1) as MonthRange;
    const currentHour = now.getHours() as TimeRange;
    setMonth(currentMonth);
    setHour(currentHour);
  }, []);

  const filteredList = list
    .filter(
      ({
        name: { nameTWzh },
        availability: { monthArrayNorthern, monthArraySouthern, timeArray }
      }) => {
        const n = nameTWzh.includes(name);
        const mthArray =
          hemisP == 'north' ? monthArrayNorthern : monthArraySouthern;
        const m = month != -1 ? mthArray.includes(month) : true;
        const h = hour != -1 ? timeArray.includes(hour) : true;

        return n && m && h;
      }
    )
    .sort((a, b) => {
      return priceDir == 'asc' ? a.price - b.price : b.price - a.price;
    });

  return (
    <div>
      <Head>
        <title>Animal Crossing Fish List</title>
      </Head>
      <main className="container mx-auto py-10">
        <div className="flex flex-wrap">
          <FilterName />
          <FilterHemis />
          <FilterMonth />
          <FilterHour />
        </div>
        <div className="flex flex-wrap items-center p-3">
          <span className="mr-2">排序:</span>
          <Sorting />
        </div>
        <div className="flex flex-wrap"></div>
        <div className="grid gap-4 p-2 sm:gap-8 grid-cols-auto-120">
          {filteredList.map((fish) => (
            <CreatureCard key={fish.id} {...fish} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface ApiFish {
  id: number;
  'file-name': string;
  name: Name;
  availability: ApiAvailability;
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museum-phrase': string;
  image_uri: string;
  icon_uri: string;
  'alt-catch-phrase'?: string[];
}

interface ApiAvailability {
  'month-northern': string;
  'month-southern': string;
  time: Time;
  isAllDay: boolean;
  isAllYear: boolean;
  location: Location;
  rarity: Rarity;
  'month-array-northern': MonthRange[];
  'month-array-southern': MonthRange[];
  'time-array': TimeRange[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res: AxiosResponse<ApiFish[]> = await axios.get('fish');
  const list = res.data.map<Fish>(toCamel);

  return {
    props: { list }
  };
};
