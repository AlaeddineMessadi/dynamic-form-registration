import React from "react";
import "./style.scss";

import { RadioButton } from "../index";
import { RadioOption } from "../../common/types";
import { ErrorMessage } from "formik";

interface IRadioProps {
  changeHandler?: React.ChangeEvent;
  label: string;
  name: string;
  options: RadioOption[];
  required?: boolean;
}

export const RadioButtonsGroup: React.FC<IRadioProps> = ({
  label,
  options,
  name,
  changeHandler,
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
              key={optionId}
              value={value}
              label={labelOpt}
              name={name}
              optionId={optionId}
            />
          );
        })}
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <label className="error">{msg}</label>}
      />
    </>
  );
};
