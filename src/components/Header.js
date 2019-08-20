import React, {Component} from 'react';
import styled from 'styled-components';
import media from '../common/mediaQuery';
import {Link} from 'gatsby';
import Headroom from 'react-headroom';
import Color from 'color';



class Header extends Component {
  state = {
    menuActive: false,
    isDark: false
  }
  menuHandler = () => {
    const {menuActive} = this.state;
    this.setState({
      menuActive: !menuActive
    })
  }
  componentDidMount() {
    let colorClass;
    const color = document.querySelector('.content.hero-selector');
    let isDark;
    console.log({ color });
    if (color != undefined) {
      colorClass = color.classList;
      isDark = colorClass.contains('white');
      console.log(isDark);
    }
    this.setState({
      isDark: isDark
    })
  }
  render() {
    const {menuLinks} = this.props;
    
    return (
      <Headroom>
        <Nav className={`nav ${this.state.menuActive ? 'mobile' : ''} ${this.state.isDark == true ? 'white' : 'black'}`}>
          <Inner className="inner">
            <Link to="/" className={`logo-wrapper ${this.state.menuActive ? 'mobile-active' : ''}`}>
              <svg className="icon icon-logo">
                <use xlinkHref="#icon-HH_NY_LOGO" />
              </svg>
            </Link>

              <NavLinks>
              {menuLinks.links.map((link, idx) => (
                
                <NavLink key={idx}>
                  <Link 
                  to={link.link_url.url}
                  activeClassName="active"
                  >
                  {link.link_text.text}
                  </Link>
                </NavLink>

                ))}
              </NavLinks>
              <a href="https://ourtreaty.com/" target="_blank" className={`shop-link`}> Shop
                <svg className="icon icon-arrow">
                  <use xlinkHref="#icon-arrow" />
                </svg>
              </a>
          
            <BurgerMenu
              onClick={this.menuHandler}
              className={`burger-menu ${this.state.menuActive ? "active" : ""}`}
            >
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </BurgerMenu>
          </Inner>
        </Nav>
        <NavMobile className={this.state.menuActive ? 'active' : ''}>
          <NavLinksMobile>
            {menuLinks.links.map((link, idx) => (

              
              <NavLinkMobile>
                <Link 
                to={link.link_url.url}
                activeClassName="active"
                >

                  {link.link_text.text}
                </Link>
              </NavLinkMobile>

            ))}
            <a href="https://ourtreaty.com/" className={`shop-link mobile`}> Shop
                <svg className="icon icon-arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            
          </NavLinksMobile>
        </NavMobile>
      </Headroom>
    );
  }
}

export default Header;

const NavMobile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 60px;
  left: -9999px;
  width: 100%;
  background: #fff;
  z-index: 15;
  opacity: 0;
  height: 100%;
  min-height: 100vh;
  transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out,
    left 0s 0.15s, -webkit-transform 0.15s ease-in-out;
  pointer-events: auto;
  .shop-link {
    font-size: 21px;
    line-height: 1.33;
    color: #0d140d;
    margin-top: 40px;
    svg {
      margin-left: 10px;
    }
    &.mobile {
      margin-top: 20px;
    }
  }
  &.active {
    opacity: 1;
    left: 0;
    transition: transform 0.15s ease-in-out, opacity 0.3s ease-in-out, left 0s,
      -webkit-transform 0.15s ease-in-out;
  }
`;
const NavLinksMobile = styled.ul`
  margin: 0;
  padding: 60px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NavLinkMobile = styled.li`
  padding-bottom: 12px;
  a {
    font-size: 21px;
    line-height: 1.33;
    color: #0d140d;
    position: relative;
    overflow-x: hidden;
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0px;
      right: 0px;
      width: 100%;
      margin: 0 auto;
      height: 1px;
      opacity: 0;
      background: #0d140d;
      transition: opacity 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    &.active {
      &:after {
        opacity: 1;
        transform: scaleX(1) translateZ(0);
        transform-origin: left top;
      }
    }
  }
`;
const Nav = styled.nav`
  
  background: transparent;
  z-index: 1;
  transition: background 0.3s ease-in-out;
  padding: 30px 0;
  
  &.mobile {
    background: #fff;
    transition: background 0.3s ease-in-out;
  }
  ${media.tablet`
    padding: 0;
  `};
  &.black {
    .inner {
      ul {
        li {
          a {
           &:after {
             background: #0d0d0d;
           } 
          }
        }
      }
    }
  }
  &.white {
    .burger-menu {
      &.active {
        .bar1, .bar2, .bar3 {
          background: #0d140d;
        }
      }
    }
    .inner {
      .mobile-active {
        .icon-logo, * {
          color: #000000;
          fill: #000000;
        }
      }
      ul {
        li {
          &:hover {
            a:after {
              background: #000;
            }
          }
        }
        .active {
          &:after {
            background: #000;
          }
        }
      }
      &:after {
        background: #ffffff;
      }
    }
  }
`;
const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  .shop-link {
    position: absolute;
    right: 40px;
    font-size: 21px;
    line-height: 21px;
    color: #0d140d;
    display: none;
    ${media.tablet`
      display: block;
    `}
    svg  {
      margin-left: 10px;
      width: .6em;
      height: .6em;
    }
  }
  ${media.tablet`
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0px;
      right: 0px;
      width: calc(100% - 80px);
      margin: 0 auto;
      height: 1px;
      background: #0d140d;
      transition: all .3s ease-in-out;
    }
    padding: 24px 0;
  `};
  .logo-wrapper {
    position: absolute;
    height: auto;
    left: 20px;
    ${media.tablet`
      left: 40px;
    `};
    .icon-logo {
      vertical-align: middle;
    }
  }
`;
const NavLink = styled.li`
  margin-left: 20px;
  position: relative;
  overflow-x: hidden;
  
  &:hover {
    a:after {
      opacity: 1;
      transform: scaleX(1) translateZ(0);
      transform-origin: left top;
    }
  }

  a {
    font-size: 21px;
    line-height: 21px;
    color: #0d140d;
    position: relative;
    overflow-x: hidden;
    &.active {
      &:after {
        opacity: 1;
        transform: scaleX(1) translateZ(0);
        /* transform-origin: left top; */
      }
    }
    /* &:before,
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      right: 0px;
      bottom: 0px;
      border: 1px solid #0d140d;
      opacity: 0;
      border-left: 0px solid transparent;
      border-right: 0px solid transparent;
      border-top: 0px solid transparent;
    } */
    &:after {
      /* transform-origin: right top; */
      /* transform: scaleX(0) translateZ(0); */
      content: "";
      position: absolute;
      width: 100%;
      right: 0px;
      bottom: 0px;
      /* background: #0d0d0d; */
      height: 1px;
      opacity: 0;
      transition: opacity 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    &:before {
      border-top-color: rgba(0, 0, 0, 0);
      border-bottom-color: rgba(0, 0, 0, 0);
    }
  }
`;
const NavLinks = styled.ul`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  ${media.tablet`
    display: flex;
  `};
`;

const BurgerMenu = styled.div`
  display: inline-block;
  position: absolute;
  right: 20px;
  width: fit-content;
  cursor: pointer;
  ${media.tablet`
    right: 40px;
  `}
  &.active {
    .bar1 {
      transform: rotate(45deg) translate(4px, 6px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      transform: rotate(-45deg) translate(4px, -6px);
    }
  }
  ${media.tablet`
    display: none;
  `}
  .bar1, .bar2, .bar3 {
    background: #0d140d;
    height: 1px;
    width: 25px;
    border-radius: 16px;
    margin: 6px 0px;
    transition: all 0.2s ease-in-out 0s;
    display: block;
  }
`;