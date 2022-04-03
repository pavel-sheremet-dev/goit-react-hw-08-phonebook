import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const AuthRoute = ({ children, redirectPath }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectPath} replace={true} />;
};

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default AuthRoute;
