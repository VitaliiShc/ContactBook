import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFillPencilFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import ContactEditor from "../ContactEditor/ContactEditor";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export const Contact = ({ contact: { id, name, number } }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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

  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
    document.body.classList.add("noScroll");
  };

  const handleHideConfirmModal = () => {
    setShowConfirmModal(false);
    document.body.classList.remove("noScroll");
  };

  const handleConfirm = () => {
    handleDelete();
    document.body.classList.remove("noScroll");
  };

  return (
    <>
      {!isEditing ? (
        <div className={css.card}>
          <div>
            <div className={css.infoFieldWrap}>
              <BsFillPersonFill size="20" className={css.icon} />
              <p className={css.text}>{name}</p>
            </div>
            <div className={css.infoFieldWrap}>
              <BsFillTelephoneFill size="20" className={css.icon} />
              <p className={css.text}>{number}</p>
            </div>
          </div>
          <div className={css.contactMngBts}>
            <button className={css.btn} onClick={() => setIsEditing(true)}>
              <BsFillPencilFill size="18" />
            </button>
            <button className={css.btn} onClick={handleShowConfirmModal}>
              <BsTrash3Fill size="18" />
            </button>
          </div>
        </div>
      ) : (
        <ContactEditor
          contact={{ id, name, number }}
          onClose={() => setIsEditing(false)}
        />
      )}
      <ConfirmModal
        showConfirmModal={showConfirmModal}
        hideConfirmModal={handleHideConfirmModal}
        confirm={handleConfirm}
        contact={{ id, name }}
      />
    </>
  );
};

export default Contact;
