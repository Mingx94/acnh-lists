import { memo } from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { useName } from './context';

export type OptionValue = string | number | null;
export type TOption<T extends OptionValue> = {
  value: T;
  children?: ReactNode;
};

type Props<T extends OptionValue> = TOption<T> & {
  className?: string;
  checked: boolean;
  onChange: (value: T) => void;
};

const Option = <T extends OptionValue>({
  className,
  checked,
  value,
  children,
  onChange
}: Props<T>) => {
  const id = uniqueId();
  const name = useName();
  return (
    <label
      htmlFor={id}
      className={classNames(className, 'flex items-center mx-2')}
    >
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {children && <span className="ml-2">{children}</span>}
    </label>
  );
};
export default memo(Option) as typeof Option;
