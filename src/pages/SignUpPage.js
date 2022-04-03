import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import toast from 'react-hot-toast';
import {
  InputField,
  InputName,
  Label,
} from 'components/common/input/Input.styled';
import { Form } from 'components/contactsForm/ContactsForm.styled';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import Section from 'components/common/section/Section';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const loading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();

    const credentials = { name, email, password };
    dispatch(authOperations.signUp(credentials));
  };

  const isDisabled = !name || !email || !password || loading;

  return (
    <Section titleLevel="h2" title="Sign up page" isHidden>
      <Form onSubmit={handleSubmit}>
        <Label>
          <InputName>Name:</InputName>
          <InputField
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{2,20}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Enter your name"
            autoComplete="off"
          />
        </Label>

        <Label>
          <InputName>Email:</InputName>
          <InputField
            type="text"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="example@example.com"
            autoComplete="off"
          />
        </Label>

        <Label>
          <InputName>Password:</InputName>
          <InputField
            type="password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Create your password"
            autoComplete="off"
          />
        </Label>
        <ButtonStyled disabled={isDisabled} type="submit">
          Sign Up
        </ButtonStyled>
      </Form>
    </Section>
  );
};

export default SignUpPage;
