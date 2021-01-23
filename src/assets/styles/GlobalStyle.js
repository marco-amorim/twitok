import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu&display=swap');

  :root {
    --light-bg: #f7f7f8;
    --light-text-base: #0e0e10;
    --light-a-hover: #9147ff;

    --dark-text-base: #efeff1;
    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: relative;

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
      color: var(--light-a-hover);
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
