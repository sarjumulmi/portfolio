import React from 'react'
import { Link } from 'react-router-dom'

import facebook from '../images/facebook.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'


const Navlinks = () => (
  <>
    <li className="nav-item">
      <Link to="/about" >
        <img src={github} alt="Gitbhub" />
      </Link>
    </li>
    <li className="nav-item ">
      <Link to="/contact" >
        <img src={linkedin} alt="Linkedin" />
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/about" >
        <img src={facebook} alt="Facebook" />
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/contact" >
        <img src={instagram} alt="Instagram" />
      </Link>
    </li>
  </>
)

export default Navlinks
