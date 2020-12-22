import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { RadioButtonsGroup, TextInput, Form } from "..";
import * as Yup from "yup";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
  useFormik,
  FormikConfig,
  FormikValues,
} from "formik";
import "./style.scss";

import { ItemOption } from "../../common/types";
import { IAppState } from "../../store/reducer";
import { FORM_SCHEMA } from "../../common/form-schema";

interface ISliderProps {
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  sliders: ItemOption[];
  name: string;
  step: number;
}

type init = { [key: string]: any };

export const Slider: React.FC<ISliderProps> = ({
  sliders,
  name,
  onSubmit: handleOnClickChange,
  step,
}) => {
  const state = useSelector((state: IAppState) => state, shallowEqual);

  const getFormElement = (item: ItemOption) => {
    const { name, type, label, required, options = [] } = item;

    if (type === "text" || type === "email" || type === "number") {
      return (
        <TextInput name={name} type={type} label={label} required={required} />
      );
    }

    if (type === "radio") {
      return (
        <RadioButtonsGroup
          name={name}
          label={label}
          options={options}
          required={required}
        />
      );
    }
    return <p>Missing Form Element type</p>;
  };

  const [formData, setFormData] = React.useState({});
  const [validationSchema, setValidationSchema] = React.useState({});

  React.useEffect(() => {
    initForm(FORM_SCHEMA.steps);
    console.log(formData);
  }, []);

  const initForm = (formSchema: ItemOption[]) => {
    let _formData: init = {};
    let _validationSchema: init = {};

    formSchema.map(({ name, type, options = [], required }) => {
      let validation = Yup.string();
      _formData[name] = "";

      if (type === "email") {
        validation = validation
          .email("Not valid Email")
          .min(5, "Minimum Length is 5");
      } else if (type === "number") {
        validation = validation
          .matches(/^\d+$/, "Not valid Phone Number")
          .min(8, "Minimum length is 8");
      } else if (type === "radio") {
        validation = validation.oneOf(options.map((o) => o.value));
      }

      if (required) {
        validation = validation.required(name + " is Required");
      }

      _validationSchema = {
        ..._validationSchema,
        ...{ [name]: validation },
      };
    });

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <FormikForm className="needs-validation" noValidate>
        <div className="carousel-container">
          <div className="carousel my-carousel carousel--translate">
            {sliders.map((elm, index) => (
              <input
                key={index}
                id={index.toString()}
                className="carousel__activator"
                type="radio"
                name={name}
                checked={step === index}
                onChange={() => null}
              />
            ))}

            <div className="carousel__track">
              {sliders.map((elm, index) => (
                <li key={index} className="carousel__slide">
                  {getFormElement(elm)}
                </li>
              ))}
            </div>
          </div>
        </div>
        <SubmitButton title="Submit" />
      </FormikForm>
    </Formik>
  );
};

interface ISubmitProps {
  title: string;
}

export const SubmitButton: React.FC<ISubmitProps> = (props) => {
  const { title, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <button type="submit" {...rest} disabled={isSubmitting}>
      {title}
    </button>
  );
};
