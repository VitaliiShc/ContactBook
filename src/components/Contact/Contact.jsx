import css from "./Contact.module.css";

import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.text}>
          <BsFillPersonFill size="20" />
          &nbsp;{name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill size="18" />
          &nbsp;{number}
        </p>
      </div>
      <button className={css.btn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
