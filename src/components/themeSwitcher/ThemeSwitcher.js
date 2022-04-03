import { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { themeSelectors, themeActions } from '../../redux/theme';

import sprite from '../../images/sprite.svg';
import { ThemeBtn, ThemeIcon } from './ThemeSwitcher.styled';

const { getTheme } = themeSelectors;
const { toggleTheme } = themeActions;

const ThemeSwitcher = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  const handleClick = () => {
    hideElement().then(() => {
      dispatch(toggleTheme(theme));
      setOpacity(1);
      setScale(1.2);
    });
  };

  const hideElement = () => {
    const promise = new Promise(res => {
      setOpacity(0);
      setScale(0.7);
      setTimeout(() => {
        res(true);
      }, 125);
    });
    return promise;
  };

  return (
    <ThemeBtn type="button" onClick={handleClick}>
      <ThemeIcon opacity={opacity} scale={scale}>
        <use
          href={`${sprite}#${theme === 'light' ? 'icon-sun' : 'icon-moon'}`}
        ></use>
      </ThemeIcon>
    </ThemeBtn>
  );
};

export default memo(ThemeSwitcher);
