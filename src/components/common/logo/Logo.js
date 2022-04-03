import { FirstWord, SecondWord, LogoWrapper } from './Logo.styled';
import { NavLink } from 'react-router-dom';

import { ImAddressBook } from 'react-icons/im';

const Logo = () => {
  return (
    <LogoWrapper>
      <NavLink className="nav-link" to="/">
        <ImAddressBook size={30} className="logo-icon" />
        <FirstWord>Phone</FirstWord>
        <SecondWord>Book</SecondWord>
      </NavLink>
    </LogoWrapper>
  );
};

export default Logo;
