import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success(`User ${values.name} has been registered.`);
      })
      .catch(() => {
        toast.error(`Failed to register user ${values.name}.`);
      });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const registrationFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(30, "Too long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string()
      .min(8, "Too short! Min 8 characters!")
      .max(128, "Too long!")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldwrap}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name{" "}
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            id={nameFieldId}
            className={css.input}
          />
        </div>
        <div className={css.fieldwrap}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email{" "}
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            id={emailFieldId}
            className={css.input}
          />
        </div>
        <div className={css.fieldwrap}>
          <label htmlFor={passwordFieldId} className={css.label}>
            Password{" "}
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>
          <Field
            name="password"
            type="password"
            placeholder="Enter a password"
            id={passwordFieldId}
            className={css.input}
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
