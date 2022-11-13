import type { ReactNode } from 'react';

type IOptionProps = {
  value: string;
  text: string;
};

const Option = (props: IOptionProps) => (
  <option value={props.value}>{props.text}</option>
);

type IComboboxProps = {
  text: string;
  unique_label: string;
  options: IOptionProps[];
};

const ComboBox = (props: IComboboxProps) => (
  <div>
    <label htmlFor={props.unique_label}>{props.text} </label>
    <select name={props.unique_label} id={props.unique_label}>
      {props.options.map((option) => (
        <Option {...option} />
      ))}
    </select>
  </div>
);

export { ComboBox };