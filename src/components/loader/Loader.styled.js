import styled from 'styled-components';

export const LoaderContainer = styled.div`
  margin: 0 auto;

  ${({ chunk }) =>
    chunk &&
    `
  position: absolute;
  bottom: 10px;
  right: 10px;
  `}
`;
