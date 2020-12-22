import React from "react";
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

interface IPropsForm {
  props: FormikConfig<FormikValues>;
}

export const Form: React.FC<IPropsForm> = ({ props }) => {
  return (
    <Formik {...props}>
      <FormikForm className="needs-validation" noValidate>
        {props.children}
      </FormikForm>
    </Formik>
  );
};
