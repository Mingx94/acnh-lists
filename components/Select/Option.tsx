import { memo } from 'react';

export type SelectOption = string | number;

type TOption<T extends SelectOption> = {
  value: T;
  children?: ReactNode;
};

type Props<T extends SelectOption> = TOption<T>;

const Option = <T extends SelectOption>({ value, children }: Props<T>) => {
  return <option value={value}>{children}</option>;
};

export default memo(Option) as typeof Option;
