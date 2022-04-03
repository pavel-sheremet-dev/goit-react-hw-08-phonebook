import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeSelectors } from './redux/theme';
import { authSelectors, authOperations } from 'redux/auth';

import themes from './styles/themes/index';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Notify from './components/common/notify/Notify';
import Loader from 'components/loader/Loader';

const { getTheme } = themeSelectors;

const App = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {isLoadingUser ? (
        <Loader chunk />
      ) : (
        <>
          <Header />
          <Main />
          <Notify />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
