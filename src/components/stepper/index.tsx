import React from "react";
import "./style.scss";

interface IStepperProps {
  steps: any;
  step: number;
}

export const Stepper: React.FC<IStepperProps> = ({ steps }) => {
  return (
    <div className="progressbar-wrapper">
      <div className="container">
        <ul className="progressbar">
          <li className="active">Step 1</li>
          <li className="active">Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
          <li>Step 5</li>
        </ul>
      </div>
    </div>
  );
};
