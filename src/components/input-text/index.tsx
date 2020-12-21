import React from "react";
import "./style.scss";

interface ITextInputProps {
  changeHandler?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  value?: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
}

export const TextInput: React.FC<ITextInputProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  changeHandler: handleChange,
  error,
  required,
}) => {
  return (
    <>
      <label htmlFor={name}>{`${label} ${required ? " * " : ""}`}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder || ""}
        className={error ? "has-error" : ""}
      />
      {error && <label className="error">{`${label} is not valid`}</label>}
    </>
  );
};
