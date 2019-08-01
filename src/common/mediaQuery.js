import styled, { css } from 'styled-components';
import { theme } from '../GlobalStyle';

// Iterate through the sizes and create a media template
const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
