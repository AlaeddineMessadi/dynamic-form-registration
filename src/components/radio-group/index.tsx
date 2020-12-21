import React from "react";
import "./style.scss";

import { RadioButton } from "../index";

interface RadioOption {
  value: string;
  label: string;
}

interface IRadioProps {
  changeHandler?: React.ChangeEvent;
  label: string;
  name: string;
  options: RadioOption[];
  error?: boolean;
  required?: boolean;
}

export const RadioButtonsGroup: React.FC<IRadioProps> = ({
  label,
  options,
  name,
  changeHandler,
  error,
  required,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={name}>{`${label} ${required ? " * " : ""}`}</label>
      )}
      <div className="radio-group">
        {options.map(({ label: labelOpt, value }, index) => {
          const optionId = value + index;
          return (
            <RadioButton
              value={value}
              label={labelOpt}
              name={name}
              optionId={optionId}
            />
          );
        })}
      </div>
      {error && <label className="error">{`${label} is not valid`}</label>}
    </>
  );
};
