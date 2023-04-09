import React from 'react'
import logo from '../Images/tujuane-act-logo.png'
import colorLogo from '../Images/color-logo.png'

const Nav = ({ minimal}) => {
  
  return (
    <nav>
      <div className="logo-container">
        <img className='logo' src={minimal ? colorLogo : logo}/>  
      </div>    
    </nav>
  )
}

export default Nav