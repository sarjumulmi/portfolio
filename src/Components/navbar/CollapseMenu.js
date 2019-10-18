import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'

const CollapseMenu = ({ isMobileMenuOpen, handleNavbar }) => {
  const { open } = useSpring({ open: isMobileMenuOpen ? 0 : 1 })
  if (isMobileMenuOpen) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.5, 1],
          output: [0, -20, -100, -200],
        }).interpolate(yValue => `translate3d(0, ${yValue}px, 0)`)
      }}>
        <NavLinks>
          <li><a href="/portfolio" onClick={handleNavbar}><Image src={github} /></a></li>
          <li><a href="/portfolio" onClick={handleNavbar}><Image src={linkedin} /></a></li>
          <li><a href="/portfolio" onClick={handleNavbar}><Image src={facebook} /></a></li>
          <li><a href="/portfolio" onClick={handleNavbar}><Image src={instagram} /></a></li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: ${props => props.theme.bgDark}
  width: 8rem;
  position: fixed;
  top: 8.5rem;
  right: 0;
  right: 0;
  z-index: 100;
`

const NavLinks = styled.ul`
  padding: 1rem 1.5rem 0 1.5rem;
  & li {
    &(:last-of-type){
      img {
        margin-bottom: 0;
      }
    }
  }
  & a {
    display: block;
    & img {
      transition: all 300ms linear;
      cursor: pointer;
      margin-bottom: 1rem;
      &:hover {
        transform: scale(1.2)
      }
    }
  }
`

const Image = styled.img`
  height: 5rem;
  margin: auto 0;
`