import React from 'react'
import styled from 'styled-components'

import Navlinks from './Navlinks'

const Navbar = styled.ul`
  width: 80px;
  background: ${props => props.theme.bgDark};
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  transform: ${props => props.showMobileMenu ? ('translateX(0)') : ('translateX(calc(100% + 25px))')};
  height: ${props => props.showMobileMenu ? '100%' : '10px'};
  z-index: ${props => props.showMobileMenu ? '100' : '0'};
  margin-bottom: ${props => props.showMobileMenu ? '18px' : '0'};
  box-shadow: -10px 8px 10px 0px rgba(0,0,0,0.75);
  .nav-item {
    flex: initial;
    width: 40px;
    margin: 1rem 0;
    transition: transform .3s ease, margin-bottom .1s linear .4s;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 50%;
      z-index: -1;
      transition: all 0.3s ease-in;
    }
    &:hover {
      transform: scale(1.2);
    }
    &:hover:after {
      transform: scale(1.5);
      opacity: 0;
    }
    a {
      display: flex;
        align-items: center;
    }
  }

  img {
    height: 40px;
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