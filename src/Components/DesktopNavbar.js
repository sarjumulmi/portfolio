import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import unicorn from '../images/unicorn.svg'
import Navlinks from './Navlinks'

const Navbar = styled.nav`
  background: ${props => props.theme.bgDark};
  color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 1rem;
  box-shadow:  0 10px 10px 0px rgba(0,0,0,0.75);

  .navbar-left > .nav-links {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    > li {
      margin: 0 2rem;
    }
  }

  .nav-links > li {
    transition: all .3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }

  .nav-item {
    font-size: 2rem;
    font-color: white;
    position: relative;
    img {
      display: flex;
      align-items: center;
      height: 12vh;
    }

    &:hover:after {
      content: '';
      display: block;
      height: 3px;
      width: 125%;
      background: white;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    &:not(.nav-header) {
      @media screen and (max-width: 768px) {
        display:none;
    }
    }

  }
`

const MobileNavButton = styled.div`
  cursor: pointer;
  .navbar-hamburger {
    margin: 1em;
    width: 40px;
  }

  .navbar-hamburger:before, .navbar-hamburger:after, .navbar-hamburger div {
    background-color: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 4px;
    margin: 7px 0;
    transition: all .2s ease-in-out;
  }

  .navbar-hamburger:before {
    transform: ${props => props.showMobileMenu ? 'translateY(12px) rotate(135deg)' : 'translateY(0) rotate(0)'};
  }

  .navbar-hamburger:after {
    transform: ${props => props.showMobileMenu ? 'translateY(-12px) rotate(-135deg)' : 'translateY(0) rotate(0)'};
  }

  .navbar-hamburger div {
    transform: ${props => props.showMobileMenu ? 'scale(0)' : 'scale(1)'};
  }
  display: none;

  @media screen and (max-width: 768px) {
    display:block;
  }
`

const DesktopNavbar = ({ showMobileMenu, onMobileButtonClick }) => {
  return (
    <Navbar >
      <div className="navbar-left">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item nav-header">
              <img src={unicorn} alt="Home Brand" />
            </Link>
          </li>
          <Navlinks/>
        </ul>
      </div>
      <MobileNavButton className="navbar-right" showMobileMenu={showMobileMenu} onClick={onMobileButtonClick}>
        <div className="navbar-hamburger">
          <div></div>
        </div>
      </MobileNavButton>
    </Navbar>
  )
}

export default DesktopNavbar
