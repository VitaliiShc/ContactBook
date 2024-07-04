import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import toast from "react-hot-toast";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

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
      .max(30, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(30, "Too long!")
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
        toast.error(`Failed to add contact ${values.name}, try again.`);
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
        <h2 className={css.contactFormLabel}>Create a new contact</h2>
        <div className={css.fieldwrap}>
          <div className={css.labelwrap}>
            <label htmlFor={nameFieldId} className={css.label}>
              Name
            </label>
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <Field
            name="name"
            type="text"
            placeholder="New contact name"
            id={nameFieldId}
            className={css.input}
          />
        </div>
        <div className={css.fieldwrap}>
          <div className={css.labelwrap}>
            <label htmlFor={numberFieldId} className={css.label}>
              Number
            </label>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <Field
            name="number"
            type="tel"
            placeholder="New contact phone"
            id={numberFieldId}
            className={css.input}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
