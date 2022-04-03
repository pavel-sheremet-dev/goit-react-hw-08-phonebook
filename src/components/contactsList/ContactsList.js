import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import { ButtonStyled } from '../common/Button/Buttonstyled';
import {
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactsItem,
  Contacts,
  PhoneLink,
  BluredBackground,
} from './ContactsList.styled';

const { removeItem } = contactsOperations;
const { getLoading, getFilteredContacts } = contactsSelectors;

const ContactsList = () => {
  const [clickedId, setClickedId] = useState(null);
  const filteredContacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const handleClick = id => {
    setClickedId(id);
    dispatch(removeItem(id));
  };

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            <ContactPhone>
              <PhoneLink href={`tel:${name}`}>{number}</PhoneLink>
            </ContactPhone>
          </ContactInfo>
          {loading && clickedId === id && <BluredBackground />}
          <ButtonStyled type="button" onClick={() => handleClick(id)}>
            Remove
          </ButtonStyled>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

export default ContactsList;
