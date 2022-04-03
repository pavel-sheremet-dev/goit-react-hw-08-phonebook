import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RedirectTimer from '../components/redirectTimer/RedirectTimer';

import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import Section from 'components/common/section/Section';

const NotFoundPage = () => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!timeToRedirect) return;
    navigate('/', { replace: true });
  }, [navigate, timeToRedirect]);

  return (
    <Section title="PAGE NOT FOUND (404)" titleLevel="h2">
      <ButtonStyled onClick={handleClick}>{`Back to main page`}</ButtonStyled>
      <p className="paragraph">The requested page was not found</p>
      <RedirectTimer getRedirect={setTimeToRedirect} />
    </Section>
  );
};

export default NotFoundPage;
