import React from "react";
import { Dispatch } from "redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "./App.scss";
import { FORM_SCHEMA } from "../common/form-schema";
import { addDataFieldAction, submitAction } from "../store/actions";
import { ButtonsControl, Slider, Stepper } from "../components";

function App() {
  const [step, setStep] = React.useState(0);
  const dispatch: Dispatch<any> = useDispatch();

  const { steps } = FORM_SCHEMA;
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  // Previous Button click handler
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(step - 1);
    },
    [step, setStep]
  );

  // on step submit
  const onStepSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      setStep(() => (isLastStep ? 0 : step + 1));

      dispatch(submitAction(true));
    },
    [step, setStep]
  );

  return (
    <main>
      <div className="container">
        <fieldset className="form-fieldset">
          <legend>
            <h1>Registration Form</h1>
          </legend>
          <div>
            <Stepper steps={steps} step={step} />
          </div>
          <h2 className="subtitle">Please enter your Name</h2>
          <div>
            <Slider name="slider" sliders={steps} step={step} />
          </div>
          <ButtonsControl
            currentStep={step}
            onClickNext={onStepSubmit}
            onClickPrevious={onPrevClick}
          />
        </fieldset>
      </div>
    </main>
  );
}

export default App;
