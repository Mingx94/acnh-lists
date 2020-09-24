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
          className="block w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </label>
  );
};

export default memo(Select) as typeof Select;

export { default as Option } from './Option';
