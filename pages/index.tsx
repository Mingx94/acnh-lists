import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AxiosResponse } from 'axios';
import { toCamel } from 'convert-keys';

import { Fish, ApiFish } from '~/models/Fish';
import FishCard from '~/components/Fish';
import axios from '~/utils/request';

import styles from '~/styles/style.module.scss';

export default function Home({ list }: { list: Fish[] }) {
  return (
    <div>
      <Head>
        <title>Animal Crossing Fish List</title>
      </Head>
      <main className="container mx-auto py-10">
        <div className={[styles.fishList, 'grid gap-8'].join(' ')}>
          {list.map((fish) => (
            <FishCard key={fish.id} {...fish} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res: AxiosResponse<ApiFish[]> = await axios.get('fish');
  const list = res.data.map<Fish>(toCamel);

  return {
    props: { list }
  };
};
