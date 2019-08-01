import { createGlobalStyle } from 'styled-components';
import fontFiles from './common/fonts';

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#EEEEEE',
    lightGray: '#1B1B1B',
    lightblue: `lightblue`,
    beige: '#eae9de',
  },
  breakpoints: {
    mobile: '425px',
    tablet: '768px',
    tabletLarge: '1024px',
    desktop: '1280px'
  },
  sizes: {
    desktop: 1280,
    tabletLarge: 1024,
    tablet: 768,
    tabletPlus: 769,
    phone: 425
  }
};


const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'TimesNRMTStd-BoldCond';
    font-style: normal;
    font-weight: normal;
    src: url(${fontFiles.TimesNRMTStdBoldCondTTF}) format('tff'), url(${fontFiles.TimesNRMTStdBoldCondWOFF}) format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  *:focus {
    outline: none;
  }
  
  body {
    color: ${theme.colors.black};
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 2;
    margin: 0;
    overflow-x: hidden !important;
    padding: 0;
    max-width: 100%;
    width: 100%;
    font-family: "Times New Roman", Times, serif;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.black};
  }

  input {
    border-radius: 0;
    -webkit-appearance: none;
    
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${theme.colors.black};
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${theme.colors.black};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${theme.colors.black};
    }

    &[type=email] {
      width: 100%;
    }
  }

  li {
    list-style-type: none;
  }
  img {
    max-width: 100%;
    width: 100%;
  }
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .site-link {
    display: block;
    border: 1px solid #0d140d;
    text-align: center;
    padding: 10px 0 11px 0;
    height: 40px;
    max-width: 360px;
    width: 100%;
    background: #fff;
    color: #0d140d;
    transition: all .4s ease-in-out;
    font-size: 21px;
    line-height: 1;
    cursor: pointer;
    @media(min-width: 768px) {

    }
    .icon-arrow {
      margin-left: 8px;
      /* transition: all .4s ease-in-out; */
    }
    &:hover {
      background: #0d140d;
      color: #fff;
      transition: all .4s ease-in-out;
      .icon-arrow {
        stroke: #fff;
        fill: #fff;
        /* transition: all .4s ease-in-out; */
      }
    }
  }
  .headroom {
    z-index: 11 !important;
  }
  .headroom--unfixed {
    .nav {
      &.white {
        .inner {
          ul {
            li {
              a {
                &.active {
                  &:after {
                    background: #fff;
                  }
                }
              }
              &:hover {
                a:after {
                  background: #fff;
                }
              }
            }
          }
        }
        .bar1,.bar2,.bar3 {
          background: #ffffff;
        }
        * {
          color: #ffffff;
          fill: #ffffff;
        }
      }
    }
  }
  .headroom--pinned {

    .nav {
      background: #fff;
      transition: background .3s ease-in-out;
      &.white {
        .inner {
          &:after  {
            background: #000;
          }
        }
      }
      .inner {
        &:after {
          width: 100%;
          transition: all .3s ease-in-out;
        }
        @media(min-width: 768px) {

        }
      }
    }
  }

  .icon-logo {
    height: 1em;
    width: 12.857421875em;
  }
  .icon-arrow {
    width: .8em;
    height: .8em;
  }
  .times-bold { font-family: 'TimesNRMTStd-BoldCond'; }
  
`;
export default GlobalStyle;