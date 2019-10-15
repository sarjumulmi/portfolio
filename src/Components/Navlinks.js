import React from 'react'

import { Link } from 'react-router-dom'


const Navlinks = () => (
  <>
    <li className="nav-item-wrapper">
      <Link to="/about" className="nav-item">
        About
      </Link>
    </li>
    <li className="nav-item-wrapper">
      <Link to="/contact" className="nav-item">
        Contact
      </Link>
    </li>
  </>
)

export default Navlinks
