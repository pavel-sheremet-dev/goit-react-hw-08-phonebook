import styled from 'styled-components';

export const Paper = styled.div`
  width: 280px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.fontColor};
`;
