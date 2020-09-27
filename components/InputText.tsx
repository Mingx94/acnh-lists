import classNames from 'classnames';

type Props = {
  id: string;
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const InputText = ({
  id,
  className,
  label,
  name,
  placeholder,
  value,
  onChange
}: Props) => {
  return (
    <label
      className={classNames(className, 'py-3 flex items-center')}
      htmlFor={id}
    >
      <span className="mr-3">{label}: </span>
      <div className="inline-block w-64">
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className="form-input block w-full transition duration-100"
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
    </label>
  );
};

export default InputText;
