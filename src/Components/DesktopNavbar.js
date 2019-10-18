import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import unicorn from '../images/unicorn.svg'
import Navlinks from './Navlinks'

const Navbar = styled.nav`
  position: sticky;
  background-color: ${props => props.slide === '-15vh' ? props.theme.bgLight : props.theme.bgDark};
  color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 .5rem;
  box-shadow:  0 10px 10px 0px rgba(0,0,0,0.75);
  /** prevent box shadow being cut-off by adding bottom margin & transition to no-margin after animation**/
  margin-bottom: ${props => props.showMobileMenu ? '0' : '18px'};
  transition: ${props => props.showMobileMenu ? '' : 'margin-bottom .1s ease-in .4s'};
  transition: transform .4s ease-in-out .3s;
  transform: ${props => `translateY(${props.slide})`}
  }

  .nav-links {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .nav-item {
      transition: all 0.3s ease-in;
      margin-right: 1rem;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        border-radius: 50%;
        z-index: -100;
        transition: all 0.3s ease-in;
      }
      &:hover {
        transform: scale(1.2)
      }
      &:hover:after {
        transform: scale(1.5);
        opacity: 0;
        background: white;
      }
      a {
        display: flex;
        align-items: center;
      }
    }
  }

  img {
    height: 6vh;
  }
  .nav-header img {
    height: 8vh;
  }

  .nav-item:not(:first-child) {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

`

const MobileNavButton = styled.div`
  cursor: pointer;
  .navbar-hamburger {
    margin-right: 1em;
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
    display: block;
  }
`

const DesktopNavbar = ({ showMobileMenu, onMobileButtonClick }) => {
  const [scrollHeight, setScrollHeight] = useState('0')
  const [slide, setSlide] = useState('0')

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollHeight = window.scrollY
      console.log(currentScrollHeight, ' vs: ', scrollHeight, ' vs: ', slide)
      if (currentScrollHeight > scrollHeight) {
        setSlide('-15vh')
      } else if (currentScrollHeight < scrollHeight && currentScrollHeight < 50) {
        setSlide('0')
      }
      setScrollHeight(currentScrollHeight)
    }
  }, [scrollHeight, slide])

  return (
    <Navbar showMobileMenu={showMobileMenu} slide={slide}>
      <div className="navbar-left">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/portfolio" className="nav-header">
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
