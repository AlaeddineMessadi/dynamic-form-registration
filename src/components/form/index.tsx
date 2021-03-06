import React, { Dispatch, useRef } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./style.scss";
import { FORM_SCHEMA } from "../../common/form-schema";
import { ItemOption, KeyType, DataField } from "../../common/types";
import { addDataFieldAction, setWidthAction } from "../../store/actions";
import { debounce } from "lodash";

interface IPropsForm {
  children: JSX.Element | JSX.Element[];
  className?: string;
  style?: any;
}
export const Form: React.FC<IPropsForm> = ({
  children,
  className,
  style = {},
}) => {
  const dispatch: Dispatch<any> = useDispatch();
  let history = useHistory();
  const containerRef = useRef(null);

  const [formData, setFormData] = React.useState({});
  const [validationSchema, setValidationSchema] = React.useState({});

  const widthCall = (elementRef: HTMLElement) => {
    const containerWidth = elementRef.current.getBoundingClientRect().width;
    console.log("containerWidth: ,", containerWidth);

    dispatch(setWidthAction(containerWidth));
  };
  React.useEffect(() => {
    initForm(FORM_SCHEMA.steps);
    if (containerRef) widthCall(containerRef);

    window.addEventListener(
      "resize",
      debounce(() => {
        // get container width
        widthCall(containerRef);
      }, 50)
    );
  }, [dispatch]);

  const initForm = (formSchema: ItemOption[]) => {
    let _formData: KeyType = {};
    let _validationSchema: KeyType = {};

    // eslint-disable-next-line
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
        dispatch(addDataFieldAction(values as DataField[]));
        history.push("/result");
        actions.setSubmitting(false);
      }}
    >
      <FormikForm
        className={`needs-validation ${className}`}
        style={style}
        noValidate
        ref={containerRef}
      >
        {children}
      </FormikForm>
    </Formik>
  );
};
