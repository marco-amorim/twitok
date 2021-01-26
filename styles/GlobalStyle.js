import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --light-bg: #f7f7f8;
    --light-text-base: #0e0e10;

    --purple-default: #9147ff;
    --white: #FFFFFF;
    --bg-button-hover: #772ce8;

    --dark-text-base: #efeff1;
    
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
  
  }

  a {
    color: var(--light-text-base);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--purple-default);
    }
  }

  body {
    background-color: var(--light-bg);
    color: var(--light-text-base);
    font-family: 'Ubuntu';
    font-size: 1rem;
  }

  * {
    font-family: 'Roboto', sans-serif;
  }
    
   h1, h2, h3, h4, h5 {
    font-family: 'Ubuntu', sans-serif;
   }
`;

export default GlobalStyle;
