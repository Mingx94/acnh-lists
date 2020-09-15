import { GetServerSideProps } from 'next';
import { AxiosResponse } from 'axios';
import Head from 'next/head';
import axios from '~/utils/request';
import { FishList } from '~/models/Fish';

// import styles from '~/styles/style.module.scss';

export default function Home({ list }: { list: FishList }) {
  if (process.browser) {
    console.log(list);
  }
  return (
    <div>
      <Head>
        <title>Animal Crossing Fish List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res: AxiosResponse<FishList> = await axios.get('fish');

  return {
    props: {
      list: res.data
    }
  };
};
