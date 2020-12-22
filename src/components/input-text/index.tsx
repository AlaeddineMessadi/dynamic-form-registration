import { ErrorMessage, Field } from "formik";
import React from "react";
import "./style.scss";

interface ITextInputProps {
  changeHandler?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
}

export const TextInput: React.FC<ITextInputProps> = ({
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
