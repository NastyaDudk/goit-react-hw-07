import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!filteredContacts.length ? (
        <p>No contacts yet...</p>
      ) : (
       <ul className={css.contactList}>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact {...contact} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
