import { Field } from "formik";
import React from "react";
import "./style.scss";

interface RadioOptionProps {
  value: string;
  label: string;
  name: string;
  optionId: string;
}

export const RadioButton: React.FC<RadioOptionProps> = ({
  value,
  label,
  optionId,
  name,
}) => {
  return (
    <div className="radio-wrapper">
      <Field
        className="state"
        type="radio"
        name={name}
        id={optionId}
        value={value}
      />
      <label className="label" htmlFor={optionId}>
        <div className="indicator"></div>
        <span className="text">{label}</span>
      </label>
    </div>
  );
};
