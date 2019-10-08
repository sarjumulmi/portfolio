import React from 'react'

import { Link } from 'react-router-dom'


const Navlinks = () => (
  <>
    <li>
      <Link to="/about" className="nav-item">
        About
      </Link>
    </li>
    <li>
      <Link to="/contact" className="nav-item">
        Contact
      </Link>
    </li>
  </>
)

export default Navlinks
