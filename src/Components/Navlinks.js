import React from 'react'

import { Link } from 'react-router-dom'
import unicorn from '../images/unicorn.svg'

const Navlinks = () => (
  <ul className="nav-links">
    <li>
      <Link to="/" className="nav-item">
        <img src={unicorn} alt="Home Brand" />
      </Link>
    </li>
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
  </ul>
)

export default Navlinks
