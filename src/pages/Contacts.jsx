import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./Pages.module.css";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/selectors";

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contact Book</DocumentTitle>
      <div className={css.contactsContainer}>
        <div className={css.contactsTools}>
          <h1 className={css.bookTitle}>Contact Book</h1>
          <SearchBox />
          <ContactForm />
        </div>
        <div>
          {!isLoading && !error && <ContactList />}
          {!isLoading && error && <ErrorMessage />}
          {isLoading && !error && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Contacts;
