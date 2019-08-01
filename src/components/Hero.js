import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {H1, Type} from '../common/Type';
import media from '../common/mediaQuery';
import {getContrast50} from '../common/contrast';
import Color from 'color';
const HeroWrapper = styled.div`
  display: flex;
  height: auto;
  padding-top: 60px;
  min-height: calc(100vh - 72px);
  &.fullBleed {
    min-height: calc(75vh - 72px);
    ${media.tablet`
      min-height: 90vh;
    `}
  }
  &.hasVideo {
    padding-top: 0;
  }
  ${media.tablet`
    min-height: 90vh;
    height: 100%;
    /* max-height: 620px; */
    padding-top: 0;

  `}
  ${props => props.alignment == 'right' && css`
    .content {
      order: 1;
      ${media.tablet`
        padding-right: 40px;
      `}
    }
    .image {
      order: 2;
      ${media.tablet`
        padding-left: 40px;
      `}
    }
  `}
  ${props => props.alignment == 'left' && css`
    .content {
      order: 2;
      ${media.tablet`
        padding-left: 40px;

      `}
    }
    .image {
      order: 1;
      ${media.tablet`
        padding-right: 40px;

      `}
    }
  `}
  & + .section-heading {
    padding-top: 40px;
    ${media.tablet`
      padding-top: 80px;
    `}
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 20px;
  padding-top: 80px;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${media.tablet`
    padding: 0 40px 40px 40px;
    flex-direction: row;  
  `}
  .video-wrapper {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    /* opacity: 0; */
    transition: opacity .4s ease-in-out;
    .hero--video {
      object-fit: cover;
      position: relative;
      width: 100%;
      height: calc(100vh - 72px);
      overflow: hidden;
      position: relative;
      ${media.tablet`
        height: calc(100vh);
      `}
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  flex: 1 0 auto;
  z-index: 10;
  padding-bottom: 16px;
  ${media.tablet`
    flex: 1 0 50%;
    max-width: 50%;
    padding-bottom: 0;
    
  `}
  &.white {
    .site-link {
      border-color: #fff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
    h1, p {
      color: #fff;
    }
  }
  &.black {
    .site-link {
      border-color: #000;
      color: #000;
      &:hover {
        background: #000;
        color: #fff;
      }
    }
    h1, p {
      color: #000;
    }
  }
  h1 {
    text-transform: uppercase;
    padding-bottom: 10px;
    text-align: center;
    ${media.tablet`
      text-align: center;
      max-width: 560px;
      margin: 0 auto;

    `}
  }
  p {
    text-align: left;
    /* padding-bottom: 10px; */
    margin-top: 15px;

  }
`;
const ImageWrapper = styled.div`
  flex: 1 0 auto;
  max-width: 100%;
  ${media.tablet`
    flex: 1 0 50%;
    max-width: 50%;
    
  `}
  img {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;
const Links = styled.a`
  margin-top: 24px;
  width: 100%;
  max-width: none;
  background: transparent;

`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`;
class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {module} = this.props;
    const heading = module.heading.text;
    const description = module.description.text;
    const color = module.background_color;
    const img = module.module_image.url;
    const alignment = module.alignment;
    const bgImage = module.background_image.url ? module.background_image.url : '';
    const bgVideo = module.background_video && module.background_video.url ? module.background_video.url : ''; 
    const bgColor = {
      backgroundImage: `url(${bgImage})`,
      backgroundColor: `${color}`
    }
    // console.log({color});
    let colorValue;
    if(color != undefined) {
      colorValue = Color(color);
    } else {
      colorValue = Color('#FFFFFF');
    }
    // console.log(colorValue.isLight());
    const colorClass = (colorValue != undefined && colorValue.isLight() ? 'black' : 'white' );
    const videoClass = (module.background_video != undefined ? 'hasVideo' : '');
    // const fullBleed = (img != undefined ? '' : 'fullBleed');
    const fullBleed = (module.full_bleed != null ? module.full_bleed : '');
    const fullBleedClass = (module.full_bleed != null ? 'fullBleed' : '');
    console.log({fullBleed});
    
    return(
      <HeroWrapper style={bgColor} alignment={alignment} className={`${videoClass} ${fullBleedClass}`} >
        <Row>
          <ContentWrapper className={`content hero-selector ${colorClass}`}>
            <H1>{heading}</H1>
            <Type>{description}</Type>
            {module.cta && module.cta_url && (
              <LinkWrapper>
                <Links href={module.cta_url.url} className={"site-link"}>
                  {module.cta.text}
                </Links>
              </LinkWrapper>
            )}
          </ContentWrapper>
          {bgVideo && bgVideo != null && fullBleed == 'true' ?  (
            <div className="video-wrapper">
              <video id="hero-video" className="hero hero--video" width="100%" poster="//cdn.shopify.com/s/files/1/0018/7904/8227/files/190531_Dorsa_Treaty_Calm_0041_1600x.jpg?v=1560527956" playsInline loop muted autoPlay>
                <source src={bgVideo} type="video/mp4" />

              </video>
            </div>
          ) : (
            <ImageWrapper className="image">
              {bgVideo && bgVideo != null && fullBleed == 'false' ? (
                <video id="hero-video" className="hero hero--video" width="100%" poster="//cdn.shopify.com/s/files/1/0018/7904/8227/files/190531_Dorsa_Treaty_Calm_0041_1600x.jpg?v=1560527956" playsInline loop muted autoPlay>
                  <source src={bgVideo} type="video/mp4" />

                </video>
              ) : (
                <picture>
                  <img src={img} />
                </picture>

              )}
            </ImageWrapper>
          )}
        </Row>
      </HeroWrapper>
    )
  }
};

export default Hero;