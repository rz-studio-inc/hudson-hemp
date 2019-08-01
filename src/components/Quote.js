import React, {Component} from 'react';
import styled from 'styled-components';
import media from '../common/mediaQuery';
const QuoteBlock = styled.p`
  font-style: italic;
  font-size: 32px;
  line-height: 1.5;
  color: #0d140d;
  max-width: none;
  width: 100%;
  padding: 20px;
  ${media.tablet`
    max-width: 50%;
    padding: 0;
  `}

`;
const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 60px 0;
`;
class Quote extends Component {
  render() {
    const {module} = this.props;
    const {quote} = module.primary;
    return(
      <QuoteWrapper>
        <QuoteBlock>{quote.text}</QuoteBlock>
      </QuoteWrapper>
    )
  }
}

export default Quote;