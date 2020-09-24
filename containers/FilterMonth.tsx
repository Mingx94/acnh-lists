import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { searchMonth } from '~/atoms';
import Select, { Option } from '~/components/Select';

const months = Array.from(Array(12)).map((_, x) => x + 1) as Array<
  NumRange<1, 13>
>;

const options = months.map((v) => ({ text: `${v}月`, value: v }));

const FilterMonth = () => {
  const [pickedMonth, setMonth] = useAtom(searchMonth);

  useEffect(() => {
    const now = new Date();
    const currentMonth = (now.getMonth() + 1) as MonthRange;
    setMonth(currentMonth);
  }, []);

  return (
    <Select
      id="month-select"
      className="px-3"
      label="月份"
      name="month"
      onChange={({ target: { value } }) => {
        setMonth(+value as typeof pickedMonth);
      }}
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
