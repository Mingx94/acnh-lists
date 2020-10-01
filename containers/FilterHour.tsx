import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { searchHour } from '~/atoms';
import Select, { Option } from '~/components/Select';

const hours = Array.from(Array(24)).map((_, x) => x) as Array<NumRange<0, 24>>;

const options = hours.map((v) => ({ text: `${v}`, value: v }));

const FilterHour = () => {
  const [pickedHour, setHour] = useAtom(searchHour);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours() as TimeRange;
    setHour(currentHour);
  }, []);

  return (
    <Select
      id="time-select"
      className="px-3"
      label="時間"
      name="time"
      onChange={({ target: { value } }) => {
        setHour(+value as typeof pickedHour);
      }}
      value={pickedHour}
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

export default FilterHour;
