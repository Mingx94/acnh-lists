import { memo } from 'react';
import FilterName from '~/components/FilterName';
import FilterHemis from '~/components/FilterHemis';
import FilterMonth from '~/components/FilterMonth';
import FilterHour from '~/components/FilterHour';

const Filters = () => (
  <div className="flex flex-wrap">
    <FilterName />
    <FilterHemis />
    <FilterMonth />
    <FilterHour />
  </div>
);

export default memo(Filters);
