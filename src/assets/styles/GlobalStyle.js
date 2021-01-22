import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --white-bright: '#f7f7f8';

    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1480px) {
      max-width: 1440px;
    }
  
  }

  body {
    background-color: var(---white-bright);
  }
`;

export default GlobalStyle;
