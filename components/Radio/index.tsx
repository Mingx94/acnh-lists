import { memo } from 'react';
import classNames from 'classnames';
import { RadioProvider } from './context';

type Props<T extends OptionValue> = {
  className?: string;
  name: string;
  value: T;
  label?: string;
  children: ReactNode;
  onChange: (value: T) => void;
};

const Radio = <T extends OptionValue>({
  className,
  name,
  value,
  label,
  children,
  onChange
}: Props<T>) => {
  return (
    <RadioProvider name={name} onChange={onChange} value={value}>
      <div className={classNames(className, 'flex flex-wrap py-3 items-center')}>
        {label && <legend className="">{label}:</legend>}
        {children}
      </div>
    </RadioProvider>
  );
};

export default memo(Radio) as typeof Radio;

export { default as Option } from './Option';
