import React, {Component} from 'react';
import styled from 'styled-components';
import media from '../common/mediaQuery';
import {Type, Numbering} from '../common/Type';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 20px;
  ${media.tablet`
    padding: 40px 40px;
    margin: 0 -30px;
  `}
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: none;
  flex: 1 0 100%;
  width: 100%;
  margin-bottom: 30px;
  ${media.tablet`
    max-width: 33.333%;
    flex: 1 0 33.33%;
    padding: 0 30px;
    margin-bottom: 60px;
  `}
  .numbering {
    margin-bottom: 12px;
  }
  
`;
const BoldType = styled(Type)`
  font-weight: bold;
  margin-bottom: 5px;
`;
const Italic = styled(Type)`
  font-style: italic;
  margin-bottom: 12px;
`;
const Links = styled.a`
  margin-top: 24px;
`;
const Pic = styled.picture`
  margin-bottom: 20px;
  img {
    display: block;
  }
`;
class OneThirdColumn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const module = this.props.module;
    console.log({module});
    return (
      <Wrapper>
        {module.items.map((item, idx) => (
          <Column key={idx}>
            {item.numbering && (
              <Numbering className={"numbering"}>
                {item.numbering}
              </Numbering>
            )}
            {item.column_image.url && (
              <Pic>
                <img src={item.column_image.url} />
              </Pic>
            )}
            {item.heading_cta_url ? (
              <BoldType>
                <a href={item.heading_cta_url.url}>{item.heading.text}</a>
                {/* add arrow icon once we get svg */}
                {/* <svg></svg> */}
              </BoldType>
            ) : (
              <BoldType>{item.heading.text}</BoldType>
            )}

            <Italic>{item.subheading.text}</Italic>
            <Type>{item.description.text}</Type>
            {item.button_text && item.button_url && (
              <Links href={item.button_url.url} className={"site-link"}>
                {item.button_text.text}
                <svg className="icon icon-arrow">
                  <use xlinkHref="#icon-arrow" />
                </svg>
              </Links>
            )}
          </Column>
        ))}
      </Wrapper>
    );
  }
}

export default OneThirdColumn;