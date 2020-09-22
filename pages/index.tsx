import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import { toCamel } from 'convert-keys';

import FishCard from '~/components/Fish';
import axios from '~/utils/request';

import styles from '~/styles/style.module.scss';
import FilterInput from '~/components/FilterInput';
import { hemisphere, searchMonth, searchName } from '~/atoms';
import FilterMonth from '~/components/FilterMonth';

export default function Home({ list }: { list: Fish[] }) {
  const [name] = useAtom(searchName);
  const [month] = useAtom(searchMonth);
  const [hemisP] = useAtom(hemisphere);

  const filteredList = list.filter(
    ({
      name: { nameTWzh },
      availability: { monthArrayNorthern, monthArraySouthern }
    }) => {
      const n = nameTWzh.includes(name);
      const mthArray =
        hemisP == 'north' ? monthArrayNorthern : monthArraySouthern;
      const m = month ? mthArray.includes(month) : true;
      return n && m;
    }
  );

  return (
    <div>
      <Head>
        <title>Animal Crossing Fish List</title>
      </Head>
      <main className="container mx-auto py-10">
        <FilterInput placeholder="ex. 鱸魚" />
        <FilterMonth />
        <div className={[styles.fishList, 'grid gap-8 mt-5'].join(' ')}>
          {filteredList.map((fish) => (
            <FishCard key={fish.id} {...fish} />
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
