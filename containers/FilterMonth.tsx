import dynamic from 'next/dynamic';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { searchMonth } from '~/atoms';

const Select = dynamic(() => import('~/components/Select'), { ssr: false });
const Option = dynamic(() => import('~/components/Select/Option'), {
  ssr: false
});

const months = Array.from(Array(12)).map((_, x) => x + 1) as Array<
  NumRange<1, 13>
>;

const options = months.map((v) => ({ text: `${v}月`, value: v }));

const FilterMonth = () => {
  const [pickedMonth, setMonth] = useAtom(searchMonth);
  const selectChanged = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) =>
      setMonth(+value as typeof pickedMonth),
    []
  );

  return (
    <Select
      className="px-3"
      label="月份"
      name="month"
      onChange={selectChanged}
      value={pickedMonth}
    >
      <Option value={-1}>全部</Option>
      {options.map(({ text, value: optVal }) => (
        <Option key={optVal} value={optVal}>
          {text}
        </Option>
      ))}
    </Select>
  );
};

export default FilterMonth;
