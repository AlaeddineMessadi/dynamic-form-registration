import React from "react";
import "./App.scss";

import { FORM_SCHEMA } from "../common/form-schema";

import { ButtonsControl, Slider } from "../components";

function App() {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});

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
    },
    [step, setStep]
  );

  return (
    <main>
      <form className="container">
        <fieldset className="form-fieldset">
          <legend>
            <h1>Registration Form</h1>
          </legend>
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
      </form>
    </main>
  );
}

export default App;
