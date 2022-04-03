import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

// components
import ContactsForm from '../contactsForm/ContactsForm';
import ContactsList from '../contactsList/ContactsList';
import Filter from '../filter/Filter';
import EmptyContactsNotify from '../common/notify/EmptyContactsNotify';
import Section from '../common/section/Section';
import Block from 'components/common/block/Block';
import { BlockWrapper } from './Contacts.styled';

const { getItems } = contactsOperations;

const { getContacts, getError } = contactsSelectors;

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (isLoadingUser) {
    return <div>Загрузка</div>;
  }

  return (
    <Section titleLevel="h2" title="Contacts viewer and editor" isHidden>
      <BlockWrapper>
        <Block subTitle="Save new contact">
          <ContactsForm />
        </Block>
        <Block subTitle="Contacts view">
          {contacts?.length > 1 && <Filter />}
          {contacts?.length ? <ContactsList /> : <EmptyContactsNotify />}
          {error && <div>Somesing went wrong</div>}
        </Block>
      </BlockWrapper>
    </Section>
  );
};

export default Contacts;
