import React from 'react'
import styled from 'styled-components'

import Navlinks from './Navlinks'

const Navbar = styled.ul`
  width: 60vw;
  background: ${props => props.theme.bgDark};
  align-self: flex-end;
  text-align: center;
  transition: transform 0.5s;
  transform: ${props => props.showMobileMenu ? ('translateX(0)') : ('translateX(calc(100% + 25px))')};
  box-shadow: -10px 8px 5px 0px rgba(0,0,0,0.75);
  li {
    margin: 2rem 0;
  }

  .nav-item {
    font-size: 2rem;
    position: relative;
    &:hover:after {
      content: '';
      width: 125%;
      height: 3px;
      background: white;
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

`

const MobileNavbar = ({ showMobileMenu }) => {
  return (
    <Navbar showMobileMenu={showMobileMenu}>
      <Navlinks />
    </Navbar>
  )
}

export default MobileNavbar