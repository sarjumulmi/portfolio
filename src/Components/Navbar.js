import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMobileButtonClick = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const autoHideMobileNav = useCallback(() => {
    const screenWidth = window.innerWidth
    if (showMobileMenu && screenWidth > 768) {
      setShowMobileMenu(false)
    }
  }, [showMobileMenu])

  useEffect(() => {
    window.addEventListener('resize', autoHideMobileNav)
    return () => {
      window.removeEventListener('resize', autoHideMobileNav)
    }
  }, [autoHideMobileNav])

  return(
    <NavbarContainer>
      <DesktopNavbar showMobileMenu={showMobileMenu} onMobileButtonClick={handleMobileButtonClick}/>
      <MobileNavbar showMobileMenu={showMobileMenu}/>
    </NavbarContainer>
  )
}

export default Navbar