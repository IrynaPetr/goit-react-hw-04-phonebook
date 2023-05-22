import PropTypes from 'prop-types';
import { ItemContainer, Button, Item } from './Contact.styled';

export default function Contact({ name, number, contactId, deleteContact }) {
  return (
    <Item>
      <ItemContainer>
        <div>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        <Button type="button" onClick={() => deleteContact(contactId)}>Delete</Button>
      </ItemContainer>
    </Item>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};