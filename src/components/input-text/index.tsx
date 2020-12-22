import { ErrorMessage, Field } from "formik";
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
  submit?: boolean;
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
  submit,
}) => {
  return (
    <>
      <label htmlFor={name}>{`${label} ${required ? " * " : ""}`}</label>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ""}
        className={error ? "has-error" : ""}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <label className="error">{msg}</label>}
      />
    </>
  );
};
