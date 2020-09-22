import { useMemo } from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';

type Props = {
  className?: string;
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const InputText = ({
  className,
  label,
  name,
  placeholder,
  value,
  onChange
}: Props) => {
  const id = useMemo(() => name + '-' + uniqueId(), [name]);
  return (
    <label
      className={classNames(className, 'py-3 flex items-center')}
      htmlFor={id}
    >
      <span className="mr-3">{label}: </span>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="border border-gray-500 hover:border-blue-500 focus:border-blue-500 text-gray-900 rounded outline-none px-3 py-1"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </label>
  );
};

export default InputText;
