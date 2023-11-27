import React from 'react';
import Input from './Input';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  return (
    <div
      style={{
        listStyle: 'none',
        height: '100vh',
        marginLeft: '50px',
        gap: '5px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Serach contact</h2>
      <Input />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;