import React from "react";
import "./App.scss";

import { FORM_SCHEMA } from "../common/form-schema";

import { ButtonsControl, TextInput, Slider } from "../components";

function App() {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});

  const steps = FORM_SCHEMA.steps;
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  // Previous Button click handler
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
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
            <Slider />
          </div>
          <ButtonsControl />
        </fieldset>
      </form>
    </main>
  );
}

export default App;
