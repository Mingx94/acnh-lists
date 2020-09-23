import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { hemisphere } from '~/atoms';
import { TRadio } from '~/components/Radio';

const Radio = dynamic(() => import('~/components/Radio'), {
  ssr: false
}) as TRadio;

const Option = dynamic(() => import('~/components/Radio/Option'), {
  ssr: false
});

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
