import css from "./ContactList.module.css";

import { useSelector } from "react-redux";

import { selectContacts, selectNameFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";

const visibleContacts = (contacts, filter) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = visibleContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
