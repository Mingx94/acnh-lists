import { memo } from 'react';
import classNames from 'classnames';
import { useName, useOnChange, useValue } from './context';

type TOption<T extends OptionValue> = {
  value: T;
  children?: ReactNode;
};

type Props<T extends OptionValue> = TOption<T> & {
  id: string;
  className?: string;
};

const Option = <T extends OptionValue>({
  id,
  className,
  value,
  children
}: Props<T>) => {
  const name = useName();
  const onChange = useOnChange();
  const selectedValue = useValue();
  return (
    <label
      htmlFor={id}
      className={classNames(className, 'flex items-center mx-2')}
    >
      <input
        type="radio"
        className="form-radio"
        name={name}
        id={id}
        checked={selectedValue == value}
        onChange={() => onChange(value)}
      />
      {children && <span className="ml-2">{children}</span>}
    </label>
  );
};

export default memo(Option) as typeof Option;
