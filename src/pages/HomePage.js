import Section from 'components/common/section/Section';
import { authSelectors } from 'redux/auth';
// import { contactsSelectors } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Paper } from 'components/common/paper/Paper.styled';

const HomePage = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);

  return (
    <Section titleLevel="h1" title="PhoneBook service">
      <Paper>
        <p>
          Hello{'\u00A0'}
          {name ? (
            <>
              <span>{`${name}. Nice to meet You. You are logged in, so go to`}</span>
              <NavLink className="in-text-link" to={'/contacts'}>
                {'\u00A0'}CONTACTS{'\u00A0'}
              </NavLink>
              <span>and manage your personal contacts.</span>
            </>
          ) : (
            <>
              <span>my friend. Nice to meet you on our service.</span>
              <NavLink className="in-text-link" to={'/sign-up'}>
                {'\u00A0'}SIGN UP{'\u00A0'}
              </NavLink>
              <span>or</span>
              <NavLink className="in-text-link" to={'/sign-in'}>
                {'\u00A0'}SIGN IN{'\u00A0'}
              </NavLink>

              <span>and manage your personal contacts and enjoy with us.</span>
            </>
          )}
        </p>
      </Paper>
    </Section>
  );
};

export default HomePage;
