import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import toast from 'react-hot-toast';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import {
  InputField,
  InputName,
  Label,
} from 'components/common/input/Input.styled';
import { Form } from 'components/contactsForm/ContactsForm.styled';
import Section from 'components/common/section/Section';

const SignInPage = () => {
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

    const credentials = { email, password };
    dispatch(authOperations.signIn(credentials));
  };

  const isDisabled = !email || !password || loading;

  return (
    <Section titleLevel="h2" title="Sign in page" isHidden>
      <Form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            autoComplete="off"
          />
        </Label>
        <ButtonStyled disabled={isDisabled} type="submit">
          Sign In
        </ButtonStyled>
      </Form>
    </Section>
  );
};

export default SignInPage;
