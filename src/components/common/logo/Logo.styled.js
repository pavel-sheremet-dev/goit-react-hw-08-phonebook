import styled from 'styled-components';

export const LogoWrapper = styled.div`
  padding: 10px 0;
  margin-right: auto;
  border-radius: 10px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.fontColor};

  & .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  & .logo-icon {
    fill: ${({ theme }) => theme.colors.logoColor};
  }
`;

export const FirstWord = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

export const SecondWord = styled.span`
  color: ${({ theme }) => theme.colors.logoColor};
`;
