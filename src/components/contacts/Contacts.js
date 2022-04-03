import { useSelector, useDispatch } from 'react-redux';
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

const Contacts = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const error = useSelector(contactsSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getItems());
  }, [dispatch]);

  const isFilterShow = contacts?.length > 1 || filter;

  return (
    <Section titleLevel="h2" title="Contacts viewer and editor" isHidden>
      <BlockWrapper>
        <Block subTitle="Save new contact">
          <ContactsForm />
        </Block>
        <Block subTitle="Contacts view">
          {isFilterShow && <Filter />}
          {contacts?.length ? <ContactsList /> : <EmptyContactsNotify />}
          {error && <div>Somesing went wrong</div>}
        </Block>
      </BlockWrapper>
    </Section>
  );
};

export default Contacts;
