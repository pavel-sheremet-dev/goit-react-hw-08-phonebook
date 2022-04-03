import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
import Loader from 'components/loader/Loader';
import AuthRoute from './AuthRoute';
import NotAuthRoute from './NotAuthRoute';

const { signUp, signIn } = routes.navRoutes;
const { contacts } = routes.privateRoutes;

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);

const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const SignUpPage = lazy(() =>
  import('pages/SignUpPage' /* webpackChunkName: "sign-up-page" */),
);

const SignInPage = lazy(() =>
  import('pages/SignInPage' /* webpackChunkName: "sign-in-page" */),
);

const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Loader chunk={true} />}>
      <Routes>
        {/* PUBLIC */}
        <Route path={'/'} element={<HomePage />} />

        {/* PRIVATE */}
        <Route
          path={contacts.path}
          element={
            <AuthRoute redirectPath={signIn.absolutePath}>
              <ContactsPage />
            </AuthRoute>
          }
        />

        {/* NOT AUTH */}
        <Route
          path={signUp.path}
          element={
            <NotAuthRoute redirectPath={contacts.absolutePath}>
              <SignUpPage />
            </NotAuthRoute>
          }
        />

        <Route
          path={signIn.path}
          element={
            <NotAuthRoute redirectPath={contacts.absolutePath}>
              <SignInPage />
            </NotAuthRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
