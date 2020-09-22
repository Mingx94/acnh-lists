import { useAtom } from 'jotai';
import { searchName } from '~/atoms';

const FilterInput = ({ placeholder }: { placeholder: string }) => {
  const [search, setSearch] = useAtom(searchName);

  return (
    <input
      placeholder={placeholder}
      className="border border-gray-500 hover:border-blue-500 focus:border-blue-500 text-gray-900 rounded outline-none px-3 py-1"
      type="text"
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
};

export default FilterInput;
