import React from "react";
import "./style.scss";

import { Button } from "../index";

interface IPropsButtonsControl {
  currentStep: number;
  onClickNext?: React.MouseEventHandler<HTMLButtonElement>;
  onClickPrevious?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonsControl: React.FC<IPropsButtonsControl> = ({
  currentStep,
  onClickNext,
  onClickPrevious,
}) => {
  return (
    <div className="buttons-control">
      <Button
        onClick={onClickPrevious}
        text="Previous"
        disabled={currentStep === 0}
      />
      <Button onClick={onClickNext} text="Next" />
    </div>
  );
};
