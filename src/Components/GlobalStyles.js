import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

    html {
        --lightGrey: 227,227,227;
        --tmdbDarkBlue: 3,37,65;
        --tmdbLightBlue: 1,180,228;
        --tmdbLighterGreen: 192,254,207;
        --tmdbLightGreen: 30,213,169;
        --tmdbLogoGreen: 144,206,161;
        --tmdbLogoOrange: 253,193,112;
        --tmdbLogoRed: 217,59,99;
        --accountSilver: 149,149,149;
        --accountPink: 234,20,140;
        --accountPurple: 128,91,231;
        --accountGreen: 1,210,119;
        --accountTeal: 1,198,172;
        --accountLightBlue: 1,180,228;
        --accountBlue: 1,119,210;
        --accountOrange: 210,119,1;
        --accountYellow: 210,144,1;
        --accountRed: 212,2,66;
      }

      body {
          font-family:'Source Sans Pro', sans-serif;
      }

      a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
