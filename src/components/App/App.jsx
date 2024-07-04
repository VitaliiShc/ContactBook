import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

function getInitialState() {
  const phoneBook = window.localStorage.getItem('phoneBook');
  return phoneBook !== null ? JSON.parse(phoneBook) : [];
}

const App = () => {
  const notify = (msg) => toast(msg);

  const [contacts, setContacts] = useState(getInitialState);
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phoneBook', JSON.stringify([...contacts]));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  const delContact = (delId) => {
    setContacts(contacts.filter((contact) => contact.id !== delId));
  };

  
  const addContact = (newContact) => {
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return notify(`Contact ${newContact.name} already exists`);
    }
    setContacts((contacts) => [newContact, ...contacts]);
    notify(`Contact ${newContact.name} added`);
  };
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterContacts} onChange={setFilterContacts} />
      <ContactList contacts={visibleContacts} onDelete={delContact} />
      <ToastContainer position="top-left" />
    </>
  );
};

export default App;
