import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.background};
}

/* section {
  outline: 1px solid green;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  padding-left: 0;
  list-style: none;
}

img,
a, 
svg
 {
  display: block;
}

button {
  border: none;
}

.link {
  text-decoration: none;
  color: inherit;
}

.in-text-link {
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.colors.mainBrandColor};
  font-weight: 500;

  transition: color 200ms linear;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.btnHoverBackground};
  }
}

.list {
  list-style: none;
}

.paragraph {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
