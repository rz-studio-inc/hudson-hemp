import styled, { css } from 'styled-components'
import media from './mediaQuery'

export const Headline = styled.h2`
  font-family: "brown-regular";
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: -0.5px;
  line-height: 3.35rem;
  margin: 0;

  ${media.tablet`
    font-size: 7.50rem;
    line-height: 7.50rem;
  `}

  ${props => props.small && css`
    font-size: 3rem;
    line-height: 3.35rem;

    ${media.tablet`
      font-size: 6.3rem;
      line-height: 6.3rem;
    `}
  `}

  ${props => props.white && css`
    color: ${props => props.theme.colors.white};
  `}
`;

export const H1 = styled.h1`
  font-size: 42px;
  line-height: 36px;
  letter-spacing: -0.15px;
  font-family: 'TimesNRMTStd-BoldCond';
  font-weight: normal;
  font-style: normal;
  font-stretch: condensed;
  margin: 0;
  text-transform: uppercase;
  ${media.tablet`
    letter-spacing: -0.3px;
    font-size: 80px;
    line-height: 0.88;
    
  `}


`;

export const H2 = styled.h2`
  

  ${media.tablet`
    
  `}
`;

export const H3 = styled.h3`
  font-family: "TimesNRMTStd-BoldCond";
  font-weight: normal;
  font-style: normal;
  font-stretch: condensed;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0;
  font-size: 42px;
  line-height: 36px;
  letter-spacing: -0.15px;
  ${media.tablet`
    font-size: 54px;
    line-height: 0.93;
    
  `}
`;

export const H4 = styled.h4`
  font-family: "TimesNRMTStd-BoldCond";
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: condensed;
  line-height: 0.89;
  letter-spacing: -0.2px;
  margin: 0;
  ${media.tablet`
    
  `}
`;

export const H5 = styled.h5`
  font-family: "Times New Roman";
  font-size: 28px;
  line-height: 35px;
  font-weight: bold;
  ${media.tablet`
    
  `}
`;

export const H6 = styled.h6`
  font-family: "Times New Roman";
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  /* font-size: 14px;
  line-height: 21px; */
  font-size: 21px;
  line-height: 1.33;
  ${media.tablet`
    
  `}
`;

export const Type = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 21px;
  line-height: 28px;
  ${media.tablet`
    
  `}

  
`;

export const BodySmall = styled.p`
  
  -webkit-font-smoothing: antialiased;

`;

export const Label = styled.label`
  

  ${media.tablet`
  `}

  
`;

export const Caption = styled.caption`
  margin: 0;

  ${media.tablet`
  `}

  ${props => props.bold && css`
  `}
`;


export const Numbering = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  border: 1px solid #0d140d;
  border-radius: 50%;
  padding: 5px;
  max-width: 24px;
  max-height: 24px;
  min-width: 24px;
`;