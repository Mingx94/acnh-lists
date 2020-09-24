import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
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
import FilterHemis from '~/containers/FilterHemis';
import Sorting from '~/containers/Sorting';
import Select, { Option } from '~/components/Select';

const FilterMonth = dynamic(() => import('~/containers/FilterMonth'), {
  ssr: false,
  loading: () => (
    <Select
      id="month-select"
      className="px-3"
      label="月份"
      name="month"
      onChange={() => {}}
      value={-1}
    >
      <Option value={-1}>全部</Option>
    </Select>
  )
});
const FilterHour = dynamic(() => import('~/containers/FilterHour'), {
  ssr: false,
  loading: () => (
    <Select
      id="time-select"
      className="px-3"
      label="時間"
      name="time"
      onChange={() => {}}
      value={-1}
    >
      <Option value={-1}>全部</Option>
    </Select>
  )
});

export default function Home({ list }: { list: Fish[] }) {
  const [name] = useAtom(searchName);
  const [month] = useAtom(searchMonth);
  const [hemisP] = useAtom(hemisphere);
  const [hour] = useAtom(searchHour);
  const [priceDir] = useAtom(dirPrice);

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
