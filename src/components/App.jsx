import React, {  useState, useEffect } from "react";
import Form from '../components/Form/Form';
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { Container, Title } from "./App.styled";

export default function App () {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
  return contacts ? contacts : [ 
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},];
});

  const [filter, setFilter] = useState('');

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const formSubmitHandler =  ({ name, number }) => {
      const newContact = {
      name, 
      number,
     id: nanoid(),
    };
  
 const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  if (existingContact) {
    alert(`${name} is already in contacts`);}
    else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
};


const deleteContact = contactId => {
     const updateContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updateContacts);
  };


const changeFilter = e => {
setFilter(e.currentTarget.value);
};

const filterList = () => {
  const normalizeValue = filter.toLowerCase().trim();
  return contacts.filter( contact =>
     contact.name.toLowerCase().includes(normalizeValue));
};

  
    return (
  <Container>
    <Title>Phonebook</Title>
    <Form onSubmit={formSubmitHandler}/> 

    <Title>Contacts</Title>
    <Filter value={filter} changeFilter={changeFilter}/> 
    <ContactList contacts={filterList()} 
    deleteContact={deleteContact}/>
  </Container>
  );}
  

