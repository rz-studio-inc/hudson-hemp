import React, {Component} from 'react';
import styled from 'styled-components';
import {H1, H3, Type, Numbering, H6} from '../common/Type';
import media from '../common/mediaQuery';
import { Link } from 'gatsby';
const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 20px;
  padding-top: 60px;
  ${media.tablet`
    /* padding-bottom: 40px; */
    /* border-bottom: 1px solid ${props => props.theme.colors.black}; */
    margin: 0 40px;
    padding-top: 80px;
    flex-direction: row;
    padding-bottom: 80px;
  `}
  
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: none;
  width: 100%;
  padding-bottom: 24px;
  ${media.tablet`
    padding-bottom: 40px;
    max-width: 33.333%;
    flex: 1 0 33.33%;
    padding-right: 30px;
    padding-bottom: 0;
  `}
  
  h3 {
    padding: 20px 0 12px;
    text-align: center;
  }
  .numbering {
    margin: 0 auto;
  }
`;
const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  margin: 0;
  max-width: none;
  width: 100%;
  padding-left: 10px;
  padding-bottom: 12px;
  ${media.tablet`

    padding-bottom: 40px;
  `}
  h6 {
    /* text-align: center; */
    ${media.tablet`
      text-align: left;
    `}
  }
  ${media.tablet`
    padding: 0 30px;

    max-width: 33.333%;
    flex: 1 0 33.333%;
  `}
`;
const Bullet = styled.li`
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  padding-bottom: 12px;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  padding-top: 12px;
  list-style-type: disc;
  
  font-size: 21px;
  line-height: 28px;
  &:last-of-type {
    border-bottom: none;
  }
  ${media.tablet`
  `}
  &:before {
    
  }
`;

const ImageWrapper = styled.div`
  ${media.tablet`
    padding-left: 30px;
  `}
`;
const Links = styled.a`
  margin-top: 24px;
  max-width: none;
  width: 100%;
  display: none;
  ${media.tablet`
    display: block;
  `}
  &.mobile {
    display: block;
    margin-bottom: 24px;
    ${media.tablet`
      display: none;
    `}
  }
`;
class ImageWithBullets extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const module = this.props.module;
    const heading = module.primary.heading.text;
    const subheading = module.primary.subheading.text;
    const {cta, cta_url} = module.primary;
    const {numbering} = module.primary;
    const {section_image} = module.primary;

    const bullets = module.items;
    return (
      <Row key={module.id}>
        <Content>
          {numbering && <Numbering className={'numbering'}>{numbering}</Numbering>}
          
          <H3>{heading && heading}</H3>
          <Type>{subheading && subheading}</Type>
          {cta_url && cta && (
            <Links href={cta_url.url} className={'site-link'}>
              {cta.text}
            </Links>

          )}
          
        </Content>
        <Bullets>
          {bullets && bullets.map((bullet, idx) => (
            <>
              <H6>{bullet.bullet_heading && bullet.bullet_heading.text}</H6>
              <Bullet key={idx}>{bullet.bullet_description.text}</Bullet>
            </>
          ))}
        </Bullets>
        {cta_url && cta && (
          <Links href={cta_url.url} className={'site-link mobile'}>
            {cta.text}
          </Links>

        )}
        <ImageWrapper>
          <picture>
            <img src={section_image.url} />
          </picture>
        </ImageWrapper>
      </Row>
      
    )
  }
}

export default ImageWithBullets;