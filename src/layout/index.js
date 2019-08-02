import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {StaticQuery} from 'gatsby';
import { graphql } from "gatsby";
import GlobalStyle, { theme } from '../GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Symbols from '../components/Symbols';
import Helmet from 'react-helmet';
const SiteRoot = styled.div``;
const PageWrapper = styled.div`
  position: relative;
  top: -80px;
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicHeader {
          edges {
            node {
              id
              data {
                links {
                  link_text {
                    text
                  }
                  link_url {
                    url
                  }
                }
              }
            }
          }
        }
        allPrismicFooter {
          edges {
            node {
              id
              data {
                email_subscribe_heading {
                  text
                }
                contact_email {
                  text
                }
                contact_number {
                  text
                }
                address {
                  text
                }
                instagram_url {
                  url
                  target
                }
                linkedin_url {
                  url
                  target
                }
                resources {
                  resource_title {
                    text
                  }
                  resource_link {
                    url
                    target
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <SiteRoot>
          <Helmet>
            <link type="text/css" href="/public/MyFontsWebfontsKit.css" />
            <html lang="en" />
          </Helmet>
          <Symbols />
          <ThemeProvider theme={theme}>
            <>
              <Header menuLinks={data.allPrismicHeader.edges[0].node.data} />
              <PageWrapper>{children}</PageWrapper>
              <Footer data={data.allPrismicFooter.edges[0].node.data} />
            </>
          </ThemeProvider>
          <GlobalStyle />
        </SiteRoot>
      </React.Fragment>
    )}
  />
);

export default Layout;