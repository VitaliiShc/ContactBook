import { useDispatch } from "react-redux";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";
import { BsX, BsCheck } from "react-icons/bs";

import css from "./ContactEditor.module.css";
import { editContact, fetchContacts } from "../../redux/contacts/operations";

export const ContactEditor = ({ contact: { id, name, number }, onClose }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const dispatch = useDispatch();

  const initialValues = {
    name: contactName,
    number: contactNumber,
  };

  const ContactEditorSchema = Yup.object().shape({
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

  const handleSubmit = () => {
    if (name === contactName && number === contactNumber) {
      onClose();
    } else {
      dispatch(
        editContact({
          id,
          name: contactName,
          number: contactNumber,
        })
      )
        .unwrap()
        .then(() => {
          onClose();
          toast.success(`Contact ${contactName} edited.`);
          dispatch(fetchContacts());
        })
        .catch(() => {
          toast.error(`Failed to edit contact ${contactName}, try again.`);
        });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactEditorSchema}
      enableReinitialize={true}
    >
      <Form>
        <div className={css.formwrap}>
          <div className={css.editorsWrap}>
            <div className={css.infoFieldWrap}>
              <BsFillPersonFill size="20" className={css.icon} />
              <Field
                name="name"
                type="text"
                className={css.input}
                onChange={(evt) => setContactName(evt.target.value)}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.infoFieldWrap}>
              <BsFillTelephoneFill size="20" className={css.icon} />
              <Field
                name="number"
                type="tel"
                className={css.input}
                onChange={(evt) => setContactNumber(evt.target.value)}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.contactMngBts}>
            <button className={css.btn} type="submit">
              <BsCheck size="28" />
            </button>
            <button className={css.btn} type="button" onClick={() => onClose()}>
              <BsX size="28" />
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
