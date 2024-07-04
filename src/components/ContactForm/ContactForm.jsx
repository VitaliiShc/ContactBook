import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import toast from "react-hot-toast";

import { addContact } from "../../redux/contactsOps";

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!")
      .matches(/^[0-9-]+$/, "Numbers and dashes only"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success(`Contact ${values.name} has been added.`);
      })
      .catch(() => {
        toast.error(
          `Failed to add contact ${values.name} not added, try again.`
        );
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldwrap}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name{" "}
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <Field
            name="name"
            type="text"
            id={nameFieldId}
            className={css.input}
          />
        </div>
        <div className={css.fieldwrap}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number{" "}
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          <Field
            name="number"
            type="tel"
            id={numberFieldId}
            className={css.input}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
