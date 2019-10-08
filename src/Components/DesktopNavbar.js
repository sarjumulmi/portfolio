import React, { useState } from 'react'
import styled from 'styled-components'

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

  .navbar-left > .nav-links {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    > li {
      margin: 0 2rem;
    }
  }
  .nav-item {
    font-size: 2rem;
    font-color: white;
    display: flex;
    align-items: center;
    img {
      height: 12vh;
    }
  }
`

const NavButton = styled.div`
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
    transform: ${props => props.isButtonClicked ? 'translateY(12px) rotate(135deg)' : 'translateY(0) rotate(0)'};
  }

  .navbar-hamburger:after {
    transform: ${props => props.isButtonClicked ? 'translateY(-12px) rotate(-135deg)' : 'translateY(0) rotate(0)'};
  }

  .navbar-hamburger div {
    transform: ${props => props.isButtonClicked ? 'scale(0)' : 'scale(1)'};
  }
  display: none;

  @media screen and (max-width: 768px) {
    display:block;
  }
`

const DesktopNavbar = () => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false)
  const handleMobileMenuClick = () => {
    setMobileMenuClicked(!mobileMenuClicked)
  }
  return (
    <Navbar >
      <div className="navbar-left">
        <Navlinks/>
      </div>
      <NavButton className="navbar-right" isButtonClicked={mobileMenuClicked} onClick={handleMobileMenuClick}>
        <div className="navbar-hamburger">
          <div></div>
        </div>
      </NavButton>
    </Navbar>
  )
}

export default DesktopNavbar
