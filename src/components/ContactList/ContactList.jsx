import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact key={id} 
          name={name}
          number={number}
          contactId={id}
          deleteContact={deleteContact}/>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
}