import { useAtom } from 'jotai';
import { searchMonth } from '~/atoms';
import Radio, { Option } from '~/components/Radio';

const months = Array.from(Array(12)).map((_, x) => x + 1) as Array<
  NumRange<1, 13>
>;

const options = months.map((v) => ({ text: `${v}月`, value: v }));

const FilterMonth = () => {
  const [pickedMonth, setMonth] = useAtom(searchMonth);

  return (
    <Radio
      className="px-3"
      label="月份"
      name="month"
      onChange={setMonth}
      value={pickedMonth}
    >
      <div className="grid grid-flow-row grid-rows-5 grid-cols-3 sm:grid-rows-4 sm:grid-cols-4 gap-2 sm:gap-4 ">
        <Option className="col-span-3 sm:col-span-4" value={null}>
          全部
        </Option>
        {options.map(({ text, value: optVal }) => (
          <Option key={optVal} value={optVal}>
            {text}
          </Option>
        ))}
      </div>
    </Radio>
  );
};

export default FilterMonth;
