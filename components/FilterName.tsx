import { memo } from 'react';
import { useSearchName } from '~/atoms';
import InputText from '~/components/InputText';

const FilterName = () => {
  const [search, setSearch] = useSearchName();

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

export default memo(FilterName);
