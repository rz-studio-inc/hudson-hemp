import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {H1, Type} from '../common/Type';
import media from '../common/mediaQuery';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: flex-end;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
    padding: 40px;
  `}
  ${props =>
    props.alignment == "right" &&
    css`
    .content {
      order: 1;

    }
    .image {
      order: 2;

    }
  `}
  ${props =>
    props.alignment == "left" &&
    css`
    .content {
      order: 2;

    }
    .image {
      order: 1;

    }
  `}
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 40px;
  ${media.tablet`
    padding: 0 40px;
    flex: 1 0 50%;
  `}
`;
const ImageWrapper = styled.div`
  padding: 0;
  padding-bottom: 40px;
  ${media.tablet`
    padding-bottom: 0;
  `}
  &.right {
    padding-bottom: 0;
    ${media.tablet`
      padding-bottom: 0px;
    `}
  }
  ${media.tablet`
    padding: 0 40px;
    flex: 1 0 50%;
  `}
  img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;

`;
const Links = styled.a`
  margin-top: 24px;
`;
class ImageWithText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {module} = this.props;
    const heading = module.primary.heading.text;
    const subheading = module.primary.subheading.text;
    const description = module.primary.description.text;
    const img = module.primary.image.url;
    const alignment = module.primary.alignment;
    return (
      <Wrapper alignment={alignment}>
        <Content className={`content`}>
          <Heading>{heading}</Heading>
          {subheading && <SubItalic>{subheading}</SubItalic>}
          <Description>{description}</Description>
          {module.primary.cta_text && module.primary.cta_url && (
            <LinkWrapper>
              <Links href={module.primary.cta_url.url} className={"site-link"}>
                {module.primary.cta_text.text}
              </Links>
            </LinkWrapper>
          )}
        </Content>
        <ImageWrapper className={`image ${alignment == 'right' ? 'right' : ''}`}>
          <picture>
            <img src={img} />
          </picture>
        </ImageWrapper>
      </Wrapper>
    );
  }
}
export default ImageWithText;

const Heading = styled(H1)`
  padding-bottom: 24px;
`;
const SubItalic = styled.p`
  font-size: 21px;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #0d140d;
  padding: 20px 0;
  padding-top: 0;
`;

const Description = styled.p`
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #0d140d;
  text-align: left;
  ${media.tablet`
    text-align: center;
  `}
`;