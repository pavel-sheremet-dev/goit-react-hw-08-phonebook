import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: canter;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor};

  & .nav-list {
    display: flex;
  }

  & .nav-item:not(:last-child) {
    margin-right: 20px;
  }

  & .nav-link {
    padding: 10px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 700;
    font-size: 16px;
    transition: color 250ms linear;

    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.colors.mainBrandColor};
    }
  }
`;
