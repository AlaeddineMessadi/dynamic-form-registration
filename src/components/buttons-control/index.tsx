import React, { Dispatch } from "react";
import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";

import "./style.scss";

import { Button } from "../index";
import { setStepAction } from "../../store/actions";

interface IPropsButtonsControl {
  currentStep: number;
  lastStepIndex: number;
}

export const ButtonsControl: React.FC<IPropsButtonsControl> = ({
  currentStep,
  lastStepIndex,
}) => {
  const { isSubmitting, submitForm } = useFormikContext();
  const dispatch: Dispatch<any> = useDispatch();

  const isLastStep = lastStepIndex === currentStep;
  console.log("currentStep ", currentStep);
  console.log("lastStepIndex ", lastStepIndex);

  // Previous Button click handler
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      dispatch(setStepAction(currentStep - 1));
    },
    [currentStep, setStepAction]
  );

  // on step submit
  const onStepSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      if (currentStep === lastStepIndex) {
        submitForm();
        return;
      }
      const step = isLastStep ? 0 : currentStep + 1;
      dispatch(setStepAction(step));
    },
    [currentStep, setStepAction]
  );
  return (
    <div className="buttons-control">
      <Button
        onClick={onPrevClick}
        text="Previous"
        disabled={currentStep === 0}
      />
      <Button onClick={onStepSubmit} text="Next" disabled={isSubmitting} />
    </div>
  );
};
