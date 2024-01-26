import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ContactListHeader, Container, PhonebookHeader, Section } from './App.styled';

const LOCALSTORAGE_KEY = 'contacts-key';

const App = () => {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? []
    );
    const [filter, setFilter] = useState(() => '');

    useEffect(() => {
        const savedState = localStorage.getItem(LOCALSTORAGE_KEY); 

        if (savedState) {
            const savedContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            setContacts(savedContacts);
        }
    }, []);

    useEffect(() => {
        if (!contacts.length) {
            localStorage.removeItem(LOCALSTORAGE_KEY);
        } else {
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
        }
    }, [contacts]);

    const formSubmitHandler = data => {
        const contact = {
            id: nanoid(),
            ...data,
        };

        const inContacts = contacts.some(
            ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
        );

        if (inContacts) {
            alert(`${contact.name} is already in contacts.`);
            return;
        }

        setContacts(prevContacts => [contact, ...prevContacts]);
    };

    const getVisibleContacts = () => {
        const normilizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
    };

    const deleteContact = contactId => {
        setContacts(contacts.filter(({ id }) => id !== contactId));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <Section>
            <Container>
                <PhonebookHeader>Phonebook</PhonebookHeader>
                <ContactForm onSubmit={formSubmitHandler} />

                <ContactListHeader>Contacts</ContactListHeader>
                {contacts.length > 0 ? (
                    <>
                        <Filter
                            value={filter}
                            onChange={({ currentTarget }) => setFilter(currentTarget.value)}
                        />
                        {visibleContacts.length > 0 ? (
                            <ContactList
                                contacts={visibleContacts}
                                onDeleteContact={deleteContact}
                            />
                        ) : (
                            <p>No contacts found</p>
                        )}
                    </>
                ) : (
                    "There's nothing here"
                )}
            </Container>
        </Section>
    );
};

export default App;
