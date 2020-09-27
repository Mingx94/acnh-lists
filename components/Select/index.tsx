import { memo } from 'react';
import classNames from 'classnames';
import { SelectOption } from './Option';

type Props<T extends SelectOption> = {
  id: string;
  name: string;
  className: string;
  label: string;
  children: ReactNode;
  value: T;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = <T extends SelectOption>({
  id,
  name,
  className,
  value,
  label,
  onChange,
  children
}: Props<T>) => {
  return (
    <label
      className={classNames(className, 'flex items-center py-3')}
      htmlFor={id}
    >
      <span className="mr-3">{label}:</span>
      <div className="inline-block relative w-64">
        <select
          className="form-select block w-full transition duration-100"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      </div>
    </label>
  );
};

export default memo(Select) as typeof Select;

export { default as Option } from './Option';
