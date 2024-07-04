import css from "./Contact.module.css";

import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(({ name }) => {
        toast.success(`Contact ${name} has been deleted.`);
      })
      .catch(({ name }) => {
        toast.error(`Failed to delete contact ${name}, try again.`);
      });
  };

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
