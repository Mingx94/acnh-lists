import { memo } from 'react';
import classNames from 'classnames';
import { NameProvider } from './context';

type Props = {
  className?: string;
  name: string;
  label?: string;
  children: ReactNode;
};

const Radio = ({ className, label, children, name }: Props) => {
  return (
    <NameProvider name={name}>
      <fieldset className={classNames(className, 'flex flex-wrap py-3')}>
        {label && <legend>{label}:</legend>}
        {children}
      </fieldset>
    </NameProvider>
  );
};

export default memo(Radio) as typeof Radio;

export { default as Option } from './Option';
