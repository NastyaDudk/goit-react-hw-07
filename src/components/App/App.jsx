import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import PhoneBookContainer from "../PhoneBookContainer/PhoneBookContainer.jsx";
import SearchBox from '../SearchBox/SearchBox.jsx';

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
     <PhoneBookContainer >
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </PhoneBookContainer>
  );
}

export default App;
