import React, {Component} from 'react';
import { graphql } from "gatsby";
import Layout from "../layout/index";
import PrismicDOM from 'prismic-dom';
import {Link, RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {H1} from '../common/Type';
import media from '../common/mediaQuery';
// import {linkResolver} from '../common/linkResolver';

	
var Elements = PrismicDOM.RichText.Elements;


var linkResolver = doc => {
  if (doc.type === "blog") return `/post/${doc.uid}`;
  if (doc.type === "page") return `/${doc.uid}`;
  return `/doc/ ${doc.id}`;
};


var htmlSerializer = function(type, element, content, children) {
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      return '<p class="paragraph-class">' + children.join("") + "</p>";

    // Don't wrap images in a <p> tag
    case Elements.image:
      return '<img src="' + element.url + '" alt="' + element.alt + '">';

    // Add a class to hyperlinks
    case Elements.hyperlink:
      var target = element.data.target
        ? 'target="' + element.data.target + '" rel="noopener"'
        : "";
      var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
      return (
        '<a class="some-link"' +
        target +
        ' href="' +
        linkUrl +
        '">' +
        content +
        "</a>"
      );

    // Return null to stick with the default behavior for all other elements
    default:
      return null;
  }
};


const SubItalic = styled.p`
  font-style: italic;
  font-size: 21px;
  line-height: 1.33;
  text-align: center;
  margin-top: 24px;
`;

export default ({ data }) => {
  const document = data.allPrismicSplitPageTemplate.edges[0].node.data.body_content;
  const pageTitle = data.allPrismicSplitPageTemplate.edges[0].node.data.page_title;
  const pageSubtitle = data.allPrismicSplitPageTemplate.edges[0].node.data.page_subtitle;
  console.log(document);
  
  
  return (
    <Layout>
      <RailWrapper>
        <LeftRail>
          <Inner>
            <H1>{pageTitle.text}</H1>
            <SubItalic>{pageSubtitle.text}</SubItalic>
          </Inner>
        </LeftRail>
        <RightRail>
          <React.Fragment>
            <div dangerouslySetInnerHTML={{__html: document.html}}></div>
          </React.Fragment>
        </RightRail>
      </RailWrapper>
    </Layout>
  );
};


export const query = graphql`
  query($uid: String!) {
    allPrismicSplitPageTemplate(filter: { uid: { eq: $uid } }) {
      totalCount
      edges {
        node {
          uid
          data {
            page_title {
              text
            }
            page_subtitle {
              text
            }
            body_content { 
              html
              text
            }
          }
        }
      }
    }
  }
`;

const RailWrapper = styled.div`
  position: relative;
  display: block;
  top: 70px;
  padding: 60px 20px;
  ${media.tablet`
    display: flex;
    padding: 60px 40px 80px;

    flex-direction: row;
  `}
`;
const Inner = styled.div`
  /* top: 60%; */
  ${media.tablet`
    top: 50%;
    position: sticky; 

  `}
  h1 {
    text-transform: uppercase;
    text-align: center;
    ${media.tablet`
      padding-right: 40px;

    `}
  }
`;
const LeftRail = styled.div`
  max-width: none;
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 50%;
  `}
  
`;
const RightRail = styled.div`
  /* margin-left: auto; */
  max-width: none;
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 50%;

  `}
  em {
    font-size: 32px;
    line-height: 1.5;
    font-style: italic;
  }
  li {
    list-style-type: disc;
  }
  p {
    font-size: 21px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 28px;
    padding-bottom: 40px;
    color: #0d140d;
  }
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  
`;