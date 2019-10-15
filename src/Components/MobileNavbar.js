import React from 'react'
import styled from 'styled-components'

import Navlinks from './Navlinks'

const Navbar = styled.ul`
  width: 40vw;
  background: ${props => props.theme.bgDark};
  align-self: flex-end;
  text-align: center;
  transition: all 0.5s;
  transform: ${props => props.showMobileMenu ? ('translateX(0)') : ('translateX(calc(100% + 25px))')};
  height: ${props => props.showMobileMenu ? '100%' : '10px'};
  z-index: ${props => props.showMobileMenu ? '100' : '0'};
  margin-bottom: ${props => props.showMobileMenu ? '10px' : '0'};
  box-shadow: -10px 8px 10px 0px rgba(0,0,0,0.75);
  li {
    margin: 2rem 0;
    transition: transfrom .3s ease, margin-bottom .1s ease .3s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .nav-item {
    font-size: 1rem;
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