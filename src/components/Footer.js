import React, {Component} from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {H1, H6} from '../common/Type';
import media from '../common/mediaQuery';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      response: ''
    }
  }
  saveToState = e => {
    console.log(this.state.email);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  _handleSubmit = async e => {
    e.preventDefault();
    const {email} = this.state;
    const result = await addToMailchimp(email);
    this.setState({
      response: result
    })
    console.log(this.state.response);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  render() {
    const { data } = this.props;
    console.log({ data });
    return (
      <FooterWrapper>
        <FooterEmailForm>
          <Form onSubmit={this._handleSubmit}>
            <H1>{data.email_subscribe_heading.text}</H1>
            <InputWrapper>
              <EmailInput
                type="email"
                name="email"
                placeholder={
                  this.state.response.result == "success"
                    ? "Thank You"
                    : "email address"
                }
                value={
                  this.state.response.result == "success"
                    ? "Thank you"
                    : this.state.email
                }
                onChange={this.saveToState}
              />

              <Formbutton type="submit" className={"site-link"}>
                submit
              </Formbutton>
            </InputWrapper>
            {this.state.response.result == "error" && (
              <span className='error'>{this.state.response.msg}</span>
            )}
          </Form>
          <ResourceWrapper>
            <H6>Resources</H6>
            <Linklist>
              {data.resources.map((link, idx) => (
                <ResourceItem key={idx}>
                  <a href={link.resource_link.url} target={link.resource_link.target} className="article-link">
                    <p className="article-title">
                      {link.resource_title.text}
                    </p>
                    <IconWrap>
                      Read
                      <svg className="icon icon-arrow">
                        <use xlinkHref="#icon-arrow" />
                      </svg>
                    </IconWrap>
                  </a>
                </ResourceItem>
              ))}
            </Linklist>
          </ResourceWrapper>
        </FooterEmailForm>
        <BottomRow>
          <Address>{data.address.text}</Address>
          <Contact>
            <div>{data.contact_email.text}</div>
            <div>© Hudson Hemp 2019</div>
            {/* <div>{data.contact_number.text}</div> */}
          </Contact>
          <Social>
            <a href={data.linkedin_url.url} target={data.linkedin_url.target}>
              LinkedIn
              <svg className="icon icon-arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            <a href={data.instagram_url.url} target={data.instagram_url.target}>
              Instagram
              <svg className="icon icon-arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
          </Social>
          <Legal>
            <Link to="/careers/">Careers</Link>
            <div>
            <Link to="/legal/">Legal</Link>
            </div>
          </Legal>
        </BottomRow>
      </FooterWrapper>
    );
  }
}

export default Footer;

const BottomRow = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  padding: 60px 0 0px 0;

  flex-direction: column;
  a {
    position: relative;
    overflow-x: hidden;
    &:hover {
      text-decoration: underline; 
      &:after {
        opacity: 1;
        transition: opacity 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      }
    }
    &:after {
      /* content: "";
      position: absolute;
      width: 100%;
      right: 0px;
      bottom: 0px;
      background: #0d0d0d;
      height: 1px;
      opacity: 0;
      transition: opacity 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86); */
    }
  }
  ${media.tablet`
    flex-direction: row;
    padding: 20px 0 40px 0;
    justify-content: space-between;
  `}
`;
const Address = styled.div`
  max-width: 50%;
  margin-right: auto;
  padding-bottom: 20px;
  flex: 1 0 auto;
  font-size: 21px;
  line-height: 28px;
  ${media.tablet`
    max-width: 20%;
    padding-bottom: 0;
  `}
`;
const Contact = styled.div`
  flex: 1 0 auto;
  font-size: 21px;
  line-height: 28px;
  max-width: none;
  width: 100%;
  padding-bottom: 20px;
  ${media.tablet`
    max-width: 25%;
    padding-bottom: 0;
  `}
`;
const Social = styled.div`
  flex: 1 0 auto;
  font-size: 21px;
  line-height: 28px;
  max-width: none;
  width: 100%;
  padding-bottom: 20px;
  ${media.tablet`
    max-width: 25%;
    padding-bottom: 0;

  `}
  a {
    display: block;
    svg {
      margin-left: 5px;
    }
  }
`;
const Legal = styled.div`
  max-width: none;
  width: 100%;
  flex: 1 0 auto;
  font-size: 21px;
  line-height: 28px;
  ${media.tablet`
    max-width: 25%;
  `}
`;

const FooterWrapper = styled.div`
  display: flex;
  background: ${props => props.theme.colors.beige};
  padding-top: 90px;
  padding-bottom: 40px;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  ${media.tablet`
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 80px;

  `}
`;

const FooterEmailForm = styled.div`
  display: flex;
  width: 100%;

  padding-bottom: 60px;
  border-bottom: solid 1px #0d140d;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: none;
  width: 100%;
  padding-right: 0;
  ${media.tablet`
    max-width: 50%;
    padding-right: 40px;
  `}
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
  .error {
    display: block;
    flex: none;
    width: 100%;
    color: red;
  }
`;
const ResourceWrapper = styled.div`
  padding-left: 40px;
  max-width: none;
  width: 100%;
  display: none;
  ${media.tablet`
    max-width: 50%;
    display: block;
    flex: 1 0 50%;
  `}
`;
const Formbutton = styled.button`
  max-width: 200px;
  font-family: "Times New Roman";
  text-transform: capitalize;
  background: #eae9de;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1 0 auto;
  margin-top: 24px;
  ${media.tablet`
    margin-top: 42px;
  `}
`;
const EmailInput = styled.input`
  max-width: 360px;
  width: 100%;
  height: 40px;
  background: #eae9de;
  -webkit-appearance: none;
  outline: none;
  border: none;
  border: solid 1px #0d140d;
  border-right: 0;
  text-align: center;
  padding: 10px 0 11px 0;
  font-size: 21px;
  line-height: 1;
  min-width: 180px;
  font-family: "Times New Roman";
  text-transform: capitalize;
  max-width: none;
  &:focus {
    background: #ffffff;
  }
`;
const Linklist = styled.ul`
  margin: 0;
  padding: 0;
`;
const ResourceItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #0d140d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .article-link {
    display: flex; 
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    &:hover {
      text-decoration: underline;
      transition: all .3s ease-in-out;
    }
    svg {
      margin-left: 5px;
    }
  }
  a, p {
    font-size: 21px;
    line-height: 28px;
  }
`;

const IconWrap = styled.div`
  /* flex: 1 0 auto; */
  min-width: 15%;
  text-align: right;
`;