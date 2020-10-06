import { GetStaticProps } from 'next';
import Head from 'next/head';
import { AxiosResponse } from 'axios';
import { toCamel } from 'convert-keys';
import axios from '~/utils/request';
import { useFilteredList, SearchNameProvider, createSearchAtom } from '~/atoms';
import CreatureCard from '~/components/CreatureCard';
import Filters from '~/components/Filters';
import Sorting from '~/components/Sorting';

const searchAtom = createSearchAtom();

export default function Home({ list }: { list: Creature[] }) {
  const { filteredList, searchName, setSearch } = useFilteredList(
    list,
    searchAtom
  );

  return (
    <SearchNameProvider value={{ searchName, setSearch }}>
      <Head>
        <title>Animal Crossing Fish List</title>
      </Head>
      <Filters />
      <Sorting />
      <div className="grid gap-4 p-2 sm:gap-8 grid-cols-auto-120">
        {filteredList.map((fish) => (
          <CreatureCard key={fish.id} {...fish} />
        ))}
      </div>
    </SearchNameProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res: AxiosResponse<ApiCreature[]> = await axios.get('fish');
  const list = res.data.map<Creature>(toCamel);

  return {
    props: { list },
  };
};
