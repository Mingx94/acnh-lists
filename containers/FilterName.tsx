import { useAtom } from 'jotai';
import { searchName } from '~/atoms';
import InputText from '~/components/InputText';

const FilterName = () => {
  const [search, setSearch] = useAtom(searchName);

  return (
    <InputText
      id="fish-search"
      className="px-3 w-full"
      label="搜尋"
      name="fish-search"
      value={search}
      onChange={setSearch}
    />
  );
};

export default FilterName;
