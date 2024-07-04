import css from "./ContactList.module.css";

import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
