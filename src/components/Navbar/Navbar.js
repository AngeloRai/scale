import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navabr() {
  return (
    <div className="navbar d-flex justify-content-center gap-5">
      <h3><Link className="selected" to="/">COUNTRIES</Link></h3>
      <h3><Link className="selected" to="/users">USERS</Link></h3>
    </div>
  )
}

export default Navabr
