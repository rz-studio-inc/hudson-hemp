import React, { Component } from 'react'
import { Link } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import { H1, H3, Type } from '../common/Type';
import media from '../common/mediaQuery';
import { withCookies, Cookies } from 'react-cookie';
class EmailPopup extends Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.state = {
      name: '',
      response: '',
      modalOpen: true,
      modalSeen: cookies.get('modalSeen') || false
    }
    console.log({ cookies });
  }

  componentDidMount() {

  }
  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  _handleSubmit = async e => {
    e.preventDefault();
    const { email } = this.state;
    const result = await addToMailchimp(email);
    this.setState({
      response: result
    })
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  clickHandler = e => {
    const { cookies } = this.props;
    if (!this.state.modalSeen) {
      // 2592000 seconds in 30 days
      cookies.set('modalSeen', true, { maxAge: 2592000 })
      this.setState({
        modalSeen: true
      })
    }
  }

  render() {
    const { modalSeen } = this.state;
    // if (modalSeen) { return ''; }
    const { data } = this.props;
    return (
      <NewsletterModal className={modalSeen ? 'inactive' : 'active'}>
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
          {/* {this.state.response.result == "error" && (
            <span className='error'>{this.state.response.msg}</span>
          )} */}
        </Form>
        <div className="close-icon" onClick={this.clickHandler}>
          <span className="bar-1"></span>
          <span className="bar-2"></span>
        </div>

      </NewsletterModal>
    )
  }
}

export default withCookies(EmailPopup)


const NewsletterModal = styled.div`
  background: #f8f5f5;
  position: fixed;
  bottom: 0;
  left: 0%;
  width: 100%;
  z-index: 99999;
  transform: translate3d(0,0,0);
  transition: transform .3s ease-in-out;
  max-width: calc(100% * (12/12));
  padding: 100px 40px;
  ${media.tablet`
    max-width: calc(100% * (8/12));
    padding: 60px 40px;

  `}
  &.inactive {
    transform: translate3d(-100%,0,0);
    transition: transform .3s ease-in-out;
  }
  .close-icon {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    z-index: 99999;
    cursor: pointer;
    .bar-1 {
      position: absolute;
      right: 10px;
      height: 20px;
      width: 1px;
      background: ${props => props.theme.colors.black};
      transform: rotate(45deg);
    }
    .bar-2 {
      position: absolute;
      right: 10px;
      height: 20px;
      width: 1px;
      transform: rotate(-45deg);
      background: ${props => props.theme.colors.black};
    }
  }
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: none;
  width: 100%;
  padding-right: 0;
  ${media.tablet`
    max-width: 77%;
    padding-right: 40px;
  `}
  h1 {
    text-align: center;
  }
  .error {
    display: block;
    flex: none;
    width: 100%;
    color: red;
  }
`;