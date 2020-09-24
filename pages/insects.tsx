import { GetStaticProps } from 'next';
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
import Sorting from '~/containers/Sorting';
import FilterName from '~/containers/FilterName';
import FilterHemis from '~/containers/FilterHemis';
import FilterMonth from '~/containers/FilterMonth';
import FilterHour from '~/containers/FilterHour';

export default function Insects({ list }: { list: Creature[] }) {
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
        <title>Animal Crossing Insects List</title>
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


export const getStaticProps: GetStaticProps = async () => {
  const res: AxiosResponse<ApiCreature[]> = await axios.get('Bugs');
  const list = res.data.map<Creature>(toCamel);

  return {
    props: { list }
  };
};
