import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { searchHour } from '~/atoms';
import Select, { Option } from '~/components/Select';

const months = Array.from(Array(24)).map((_, x) => x) as Array<NumRange<0, 24>>;

const options = months.map((v) => ({ text: `${v}`, value: v }));

const FilterHour = () => {
  const [pickedHour, setHour] = useAtom(searchHour);
  const selectChanged = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) =>
      setHour(+value as typeof pickedHour),
    []
  );

  return (
    <Select
      className="px-3"
      label="時間"
      name="month"
      onChange={selectChanged}
      value={pickedHour}
    >
      <Option value={0}>全部</Option>
      {options.map(({ text, value: optVal }) => (
        <Option key={optVal} value={optVal}>
          {text}
        </Option>
      ))}
    </Select>
  );
};

export default FilterHour;
