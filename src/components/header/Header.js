// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';
// import UserMenu from 'components/userMenu/UserMenu';
import { HeaderContainer } from '../common/container/StyledContainer';
import Logo from '../common/logo/Logo';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import { navRoutes, privateRoutes } from 'routes/routesData';
import { HeaderHead } from './Header.styled';
import Navigation from 'components/navigation/Navigation';

const Header = () => {
  // const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <HeaderContainer>
        <HeaderHead>
          <Logo />
          {/* {isLogIn && <UserMenu />} */}
          <ThemeSwitcher />
        </HeaderHead>

        <Navigation navRoutes={navRoutes} privateRoutes={privateRoutes} />
      </HeaderContainer>
    </header>
  );
};

export default Header;
