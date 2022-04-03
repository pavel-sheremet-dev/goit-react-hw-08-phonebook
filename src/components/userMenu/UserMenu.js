import { LogOutBtn } from 'components/common/Button/Buttonstyled';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { UserMenuWrapper } from './UserMenu.styled';
import { MdOutlineLogout } from 'react-icons/md';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.signOut());
  };

  return (
    <UserMenuWrapper>
      <p className="name">{userName}</p>
      <LogOutBtn onClick={handleClick}>
        <MdOutlineLogout size={20} className="icon" />
      </LogOutBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;
