import React from 'react'
import logo from '../Images/logo-for-tujuane.png'
import colorLogo from '../Images/color-logo.png'

const Nav = ({ minimal, authToken }) => {
  
  return (
    <nav>
      <div className="logo-container">
        <img className='logo' src={minimal ? colorLogo : logo}/>  
      </div>
       
      {!authToken && !minimal && <button className="nav-button">Log in</button>}   
    </nav>
  )
}

export default Nav