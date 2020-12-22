import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import { FORM_SCHEMA } from "../common/form-schema";
import { ButtonsControl, Form, Slider, Stepper } from "../components";
import { IAppState } from "../common/types";

function App() {
  const step = useSelector((state: IAppState) => state.step);

  const { steps } = FORM_SCHEMA;
  const lastStepIndex = steps.length - 1;

  return (
    <main>
      <Form className="container">
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
            lastStepIndex={lastStepIndex}
            steps={steps.map((step) => step.name)}
          />
        </fieldset>
      </Form>
    </main>
  );
}

export default App;
