import React, { Dispatch } from "react";
import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";

import "./style.scss";

import { Button } from "../index";
import { setStepAction } from "../../store/actions";

interface IPropsButtonsControl {
  currentStep: number;
  lastStepIndex: number;
  steps: string[];
}

export const ButtonsControl: React.FC<IPropsButtonsControl> = ({
  currentStep,
  lastStepIndex,
  steps,
}) => {
  const { isSubmitting, submitForm, errors } = useFormikContext();
  const dispatch: Dispatch<any> = useDispatch();

  const isLastStep = lastStepIndex === currentStep;

  // Previous Button click handler
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      dispatch(setStepAction(currentStep - 1));
    },
    [currentStep, dispatch]
  );

  // on step submit
  const onStepSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      if (currentStep === lastStepIndex) {
        submitForm();

        console.log(errors);
        if (errors) {
          const errorStep = steps.indexOf(Object.keys(errors)[0]);
          dispatch(setStepAction(errorStep));
        }
        return;
      }
      const step = isLastStep ? 0 : currentStep + 1;
      dispatch(setStepAction(step));
    },
    [
      currentStep,
      dispatch,
      steps,
      errors,
      isLastStep,
      submitForm,
      lastStepIndex,
    ]
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
