import { useAtom } from 'jotai';
import { searchMonth } from '~/atoms';

const months = Array.from(Array(12)).map((_, x) => x + 1) as Array<
  NumRange<1, 13>
>;

const FilterMonth = () => {
  const [pickedMonth, setMonth] = useAtom(searchMonth);

  return (
    <div className="flex">
      <label className="flex items-center mx-2">
        <input
          type="radio"
          name="month"
          checked={pickedMonth == null}
          onChange={() => {
            setMonth(null);
          }}
        />
        <span className="ml-2">全部</span>
      </label>
      {months.map((month) => (
        <label key={month} className="flex items-center mx-2">
          <input
            type="radio"
            name="month"
            checked={pickedMonth == month}
            onChange={() => {
              setMonth(month);
            }}
          />
          <span className="ml-2">{month}月</span>
        </label>
      ))}
    </div>
  );
};

export default FilterMonth;
