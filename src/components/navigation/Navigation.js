import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavigationStyled } from './Navigation.styled';
import UserMenu from 'components/userMenu/UserMenu';

const Navigation = ({ navRoutes, privateRoutes }) => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled>
      <ul className="nav-list">
        {!isLogIn &&
          Object.keys(navRoutes).map(key => {
            const { id, title, path } = navRoutes[key];
            return (
              <li key={id} className="nav-item">
                <NavLink className="nav-link" to={path}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        {isLogIn &&
          Object.keys(privateRoutes).map(key => {
            const { id, title, path } = privateRoutes[key];
            return (
              <li key={id} className="nav-item">
                <NavLink className="nav-link" to={path}>
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>
      {isLogIn && <UserMenu />}
    </NavigationStyled>
  );
};

Navigation.propTypes = {
  navRoutes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  privateRoutes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default Navigation;
