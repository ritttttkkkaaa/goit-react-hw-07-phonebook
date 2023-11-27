import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from 'redux/contactsReducer';
import { addContact } from 'redux/contacts.operations';

const ContactForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (
      contacts?.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(`${name} is alredy in your contacts`);
      return;
    }

    if (number && name) {
      dispatch(addContact({ name, phone: number }));

      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        Name
        <input
          style={{
            margin: '20px',
          }}
          value={name}
          onChange={onChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <label>
        Phone
        <input
          style={{
            margin: '20px',
          }}
          value={number}
          onChange={onChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
