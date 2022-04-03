import styled from 'styled-components';

export const StyledBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const SubTitle = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 500;

  ${({ isHidden }) =>
    isHidden &&
    `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  `};
`;
