import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

import "./style.scss";
import { FORM_SCHEMA } from "../../common/form-schema";
import { ItemOption, KeyType } from "../../common/types";

interface IPropsForm {
  children: JSX.Element | JSX.Element[];
  className?: string;
}
export const Form: React.FC<IPropsForm> = ({ children, className }) => {
  const [formData, setFormData] = React.useState({});
  const [validationSchema, setValidationSchema] = React.useState({});

  React.useEffect(() => {
    initForm(FORM_SCHEMA.steps);
  }, []);

  const initForm = (formSchema: ItemOption[]) => {
    let _formData: KeyType = {};
    let _validationSchema: KeyType = {};

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
      <FormikForm className={`needs-validation ${className}`} noValidate>
        {children}
      </FormikForm>
    </Formik>
  );
};
