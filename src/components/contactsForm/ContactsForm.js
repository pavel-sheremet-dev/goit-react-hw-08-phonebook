import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from './ContactsForm.styled';
import { ButtonStyled } from '../common/Button/Buttonstyled';
import { InputName, Label, InputField } from '../common/input/Input.styled';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import toast from 'react-hot-toast';

const { addItem } = contactsOperations;
const { getContacts } = contactsSelectors;

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const inputName = e.target.name;
    const value = e.target.value;
    if (inputName === 'name') {
      setName(value);
    }
    if (inputName === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeName = textNormalize(name);

    const isInContacts = contacts?.some(
      item => item.name.toLowerCase() === normalizeName,
    );

    if (isInContacts) {
      toast(`${name} is already in your contacts`);
      return;
    }

    dispatch(addItem({ name, number }));

    setName('');
    setNumber('');
  };

  const textNormalize = text => {
    return text.toLowerCase();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <InputName>Name:</InputName>
        <InputField
          type="text"
          name="name"
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{2,20}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          placeholder="Enter contact name"
          autoComplete="off"
        />
      </Label>
      <Label>
        <InputName>Phone number:</InputName>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          placeholder="Enter phone number"
          autoComplete="off"
        />
      </Label>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </Form>
  );
};

export default memo(ContactsForm);
