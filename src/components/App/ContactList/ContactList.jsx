import PropTypes from 'prop-types';
import { PhonebookItem, PhonebookItemButton, PhonebookList } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <PhonebookList>
            {contacts.map(({ id, name, number }) => (
                <PhonebookItem key={id}>
                    {`${name}: ${number}`}
                    <PhonebookItemButton type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </PhonebookItemButton>
                </PhonebookItem>
            ))}
        </PhonebookList>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
