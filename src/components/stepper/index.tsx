import React from "react";
import { ItemOption } from "../../common/types";
import "./style.scss";

interface IStepperProps {
  steps: ItemOption[];
  step: number;
}

export const Stepper: React.FC<IStepperProps> = ({ steps, step }) => {
  return (
    <div className="progressbar-wrapper">
      <div className="progressbar-container">
        <ul className="progressbar">
          {steps.map((item, index) => (
            <li key={index} className={index <= step ? "active" : ""}>{`Step  ${
              index + 1
            }`}</li>
          ))}
          {}
        </ul>
      </div>
    </div>
  );
};
