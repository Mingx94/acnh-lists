import { useAtom } from 'jotai';
import { hemisphere } from '~/atoms';
import Radio, { Option } from '~/components/Radio';

const FilterHemis = () => {
  const [hemis, setHemis] = useAtom(hemisphere);

  return (
    <Radio
      className="px-3"
      label="南北半球"
      name="hemis"
      value={hemis}
      onChange={setHemis}
    >
      <div className="flex">
        <Option value="north">北半球</Option>
        <Option value="south">南半球</Option>
      </div>
    </Radio>
  );
};

export default FilterHemis;
