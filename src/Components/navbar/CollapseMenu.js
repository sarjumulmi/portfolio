import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import email from '../../images/email.svg'

const CollapseMenu = ({ handleNavbar, slide }) => {
  const open = useSpring({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0, -200px, 0)'
    }
  })
  const socialAnimation = useSpring({
    from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 500,
    config: config.wobbly,
  })
  return (
    <CollapseWrapper style={open} slide={slide}>
      <NavLinks style={socialAnimation}>
        <li><a href="/portfolio" onClick={handleNavbar}><Image src={github} /></a></li>
        <li><a href="/portfolio" onClick={handleNavbar}><Image src={linkedin} /></a></li>
        <li><a href="/portfolio" onClick={handleNavbar}><Image src={facebook} /></a></li>
        <li><a href="/portfolio" onClick={handleNavbar}><Image src={instagram} /></a></li>
        <li><a href="mailto:mulmi.sarju@gmail.com"><Image src={email} /></a></li>
      </NavLinks>
    </CollapseWrapper>
  )
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: ${props => props.theme.bgDarkGray}
  width: 8rem;
  position: fixed;
  top: 8.5rem;
  transition: right 0.3s ease-out .3s;
  right: ${props => props.slide === 0 ? 0 : '-8rem'};
  z-index: 100;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const NavLinks = styled(animated.ul)`
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