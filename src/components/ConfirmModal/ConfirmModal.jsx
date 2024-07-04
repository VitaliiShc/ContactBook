import css from "./ConfirmModal.module.css";
import Modal from "react-modal";

export const ConfirmModal = ({
  showConfirmModal,
  hideConfirmModal,
  confirm,
  contact,
}) => {
  return (
    <Modal
      isOpen={showConfirmModal}
      onRequestClose={hideConfirmModal}
      overlayClassName={css.overlay}
      className={css.modal}
      contentLabel="confirmModal"
    >
      <p className={css.confirmText}>
        Are you sure you want to delete the contact {contact.name}?
      </p>
      <div className={css.btnsWrap}>
        <button onClick={confirm} className={css.btn}>
          Yes
        </button>
        <button onClick={hideConfirmModal} className={css.btn}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
