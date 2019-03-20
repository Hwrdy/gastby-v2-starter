import { createGlobalStyle } from 'styled-components';
import overpass300woff2 from '@/static/fonts/overpass-v3-latin-300.woff2';
import overpass300woff from '@/static/fonts/overpass-v3-latin-300.woff';
import overpassRegularwoff2 from '@/static/fonts/overpass-v3-latin-regular.woff2';
import overpassRegularwoff from '@/static/fonts/overpass-v3-latin-regular.woff';
import overpass700woff2 from '@/static/fonts/overpass-v3-latin-700.woff2';
import overpass700woff from '@/static/fonts/overpass-v3-latin-700.woff';
import robotoRegularwoff2 from '@/static/fonts/roboto-v18-latin-regular.woff2';
import robotoRegularwoff from '@/static/fonts/roboto-v18-latin-regular.woff';
import roboto700woff2 from '@/static/fonts/roboto-v18-latin-700.woff2';
import roboto700woff from '@/static/fonts/roboto-v18-latin-700.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Overpass Light'), local('Overpass-Light'),
        url(${overpass300woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${overpass300woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Overpass'), local('Overpass Regular'), local('Overpass-Regular'),
        url(${overpassRegularwoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${overpassRegularwoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Overpass Bold'), local('Overpass-Bold'),
        url(${overpass700woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${overpass700woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    unicode-range: U+0020-007F;
    src: local('Roboto'), local('Roboto-Regular'),
        url(${robotoRegularwoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${robotoRegularwoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Roboto';
    font-style: bold;
    font-weight: 700;
    font-display: swap;
    unicode-range: U+0020-007F;
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url(${roboto700woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${roboto700woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html,
  body {
    -webkit-overflow-scrolling: touch;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    background: #fff;
    color: #24012f;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
    overflow-x: hidden;
    overflow-y: auto;
    font-weight: normal;
    font-size: 16px;
    font-family: 'Overpass', 'Helvetica Neue', 'Helvetica', Roboto, Arial, 'Open Sans', sans-serif;
    background: #151515;
  }

  a {
    touch-action: manipulation;
  }

  ::selection {
    color: #fff;
    background: #954a97;
  }

  section {
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
    line-height: 43px;
    color: #fff;
    text-align: center;
  }

  h3 {
    font-size: 18px;
    line-height: 1.33;
    color: #24012f;
  }

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    &:focus {
      outline: 0;
    }
  }

  @media screen and (max-width: 1240px) {
    section {
      width: 100vw;
    }

    h2 {
      line-height: 28px;
      font-size: 24px;
    }

    h3 {
      text-align: center;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 760px) {
    section {
      width: 100vw;
    }

    h2 {
      line-height: 28px;
      font-size: 24px;
    }

    h3 {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export default GlobalStyle;
