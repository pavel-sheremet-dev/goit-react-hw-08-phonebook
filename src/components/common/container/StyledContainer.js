import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* outline: 1px solid yellow; */
  width: 100vw;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 660px;
  }
  @media screen and (min-width: 1024px) {
    width: 920px;
  } ;
`;

export const HeaderContainer = styled(StyledContainer)`
  padding: 0 15px;
`;
