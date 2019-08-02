import React from "react"
import { graphql } from "gatsby"
import Layout from '../layout/index';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ImageTextBlock from '../components/ImageTextBlock';
import ImageWithBullets from '../components/ImageWithBullets';
import OneThirdColumn from "../components/OneThirdColumn";
import Events from '../components/Events';
import Quote from '../components/Quote';
export default ({ data }) => {
  const dataObj = data.allPrismicPageTemplate.edges[0].node.data;
  const sliceModulesArray = data.allPrismicPageTemplate.edges[0].node.data.body;
  const hero = dataObj.hero !== null ? dataObj.hero.document[0].data : '';
  
  return (
    <Layout>
      <>
        {hero && <Hero module={hero} />}
        {sliceModulesArray && sliceModulesArray.map(module => ComponentSwitch(module.slice_type, {key: module.id, module}))}
      </>
    </Layout>
  )
}

const ComponentSwitch = (type, props) => ({
  section_heading: <SectionHeading {...props} />,
  image_w__text: <ImageTextBlock {...props} />,
  image_w__bullets: <ImageWithBullets {...props} />,
  one_third_column: <OneThirdColumn {...props} />,
  events: <Events {...props} />,
  section_heading: <SectionHeading {...props} />,
  quote: <Quote {...props} />
})[type] || '';



export const query = graphql`
  query($uid: String!) {
    allPrismicPageTemplate(filter: {uid: { eq: $uid }}) {
      totalCount
      edges {
        node {
          uid
          data {
            body {
              ... on PrismicPageTemplateBodyQuote {
                id
                slice_type
                primary {
                  quote{text}
                }
              }
              ... on PrismicPageTemplateBodyEvents {
                id 
                slice_type 
                items {
                  event_name {text}
                  event_description{text}
                  event_date
                  event_time{text}
                  event_address{text}
                  event_url {
                    link_type
                    url
                    target
                  }
                }
              }
              ... on PrismicPageTemplateBodySectionHeading {
                id
                slice_type
                primary {
                  section_heading {text}
                  section_description {text}
                }
              }
              ... on PrismicPageTemplateBodyOneThirdColumn {
                id
                slice_type
                items {
                  numbering
                  column_image {url}
                  heading {text}
                  heading_cta_url {url}
                  subheading {text}
                  description {text}
                  button_text{text}
                  button_url{
                    url
                    target
                  }
                  
                }
              }
              ... on PrismicPageTemplateBodyImageWBullets {
                id
                slice_type
                items {
                  bullet_heading {text}                
                  bullet_description {text}
                }
                primary {
                  numbering
                  heading {text}
                  subheading {text}
                  cta {text}
                  cta_url {url}
                  section_image {url}
                  
                }
              }
              ...on PrismicPageTemplateBodyImageWText {
                id
                slice_type
                primary {
                  heading { text }
                  subheading{ text }
                  description{ text }
                  cta_url { url }
                  cta_text {text}
                  image{ url }
                  alignment
                }
              }
              ...on PrismicPageTemplateBodySectionHeading {
                id
                slice_type
                primary {
                  section_heading {text}
                }

              }
            }
            hero {
              slug
              document {
                data {
                  heading { text }
                  description { text }
                  background_color
                  module_image { url }
                  background_image {url}
                  alignment
                  cta{text}
                  cta_url{url}
                  background_video { url }
                  full_bleed

                }
              }
            }
          }
        }
      }
    }

  }
`;

