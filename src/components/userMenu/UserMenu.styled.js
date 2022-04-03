import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  & .name {
    font-size: 16px;
    margin-right: 10px;
    font-weight: 500;
    text-align: right;
  }

  & .name::first-letter {
    text-transform: uppercase;
  }

  /* & .icon {
    fill: ${({ theme }) => theme.colors.fontColor};
  } */
`;
