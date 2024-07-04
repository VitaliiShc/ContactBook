import css from './Contact.module.css';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
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
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
