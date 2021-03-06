import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import { throttle } from 'lodash'

import Brand from './Brand'
import BurgerMenu from './BurgerMenu'
import CollapseMenu from './CollapseMenu'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import email from '../../images/email.svg'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  // for scrolling
  let [pos, setPos] = useState(window.pageYOffset)
  let [slide, setSlide] = useState(0)

  const throttledHandleScroll = useRef(throttle((pos) => {
    let temp = window.pageYOffset
    setSlide(() => {
      if (pos > temp) {
        return 0
      } else if (pos < temp ) {
        return '-8.5rem'
      }
    })
    setPos(temp)
  }, 250))

  useEffect(() => {
    const handleScroll = throttledHandleScroll.current
    window.addEventListener('scroll', () => handleScroll(pos))
    return(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  })
  //  end scrolling

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 600
  })

  const socialAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 1000,
    config: config.wobbly,

  })

  const autoHideMobileNav = useCallback(() => {
    const screenWidth = window.innerWidth
    if (navbarOpen && screenWidth > 768) {
      setNavbarOpen(false)
    }
  }, [navbarOpen])

  useEffect(() => {
    window.addEventListener('resize', autoHideMobileNav)
    return () => {
      window.removeEventListener('resize', autoHideMobileNav)
    }
  }, [autoHideMobileNav])

  return (
    <div>
      <NavBar style={barAnimation} slide={slide}>
        <FlexContainer >
          <Brand />
          <NavLinks style={socialAnimation}>
            <li><a href="/portfolio/about"><Image src={github} /></a></li>
            <li><a href="/portfolio/contact"><Image src={linkedin} /></a></li>
            <li><a href="/portfolio"><Image src={facebook} /></a></li>
            <li><a href="/portfolio"><Image src={instagram} /></a></li>
            <li><a href="mailto:mulmi.sarju@gmail.com"><Image src={email} /></a></li>
          </NavLinks>
          <BurgerMenuWrapper>
            <BurgerMenu isMobileMenuOpen={navbarOpen} handleBurgerClick={handleNavbar} />
          </BurgerMenuWrapper>
        </FlexContainer>
      </NavBar>
      {navbarOpen && <CollapseMenu handleNavbar={handleNavbar} slide={slide} />}
    </div>
  )
}

export default Navbar

const Image = styled.img`
  height: 5rem;
  margin: auto 0;
`

const NavBar = styled(animated.div)`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.theme.bgDarkGray};
  z-index: 100;
  transition: top 0.4s ease-in-out .2s;
  top: ${props => props.slide}
`

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: flex-start;
  height: 8.5rem;
`

const NavLinks = styled(animated.ul)`
  display: flex;
  margin: auto 0;
  li {
    display: block;
    text-align: center;
  }
  & a {
    margin: 0 1rem;
    transition: all 300ms linear;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
      transform: scale(1.1);
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      border-radius: 50%;
      transition: all 0.3s linear;
    }
    &:hover:after {
      transform: scale(1.5);
      opacity: 0;
      background: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const BurgerMenuWrapper = styled.div`
  margin: auto 0 auto auto;
  @media (min-width: 769px) {
    display: none;
  }
`