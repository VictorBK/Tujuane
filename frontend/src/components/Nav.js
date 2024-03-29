import React from 'react'
import logo from '../Images/logo-for-tujuane.png'
import colorLogo from '../Images/color-logo.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  }

  const authToken = true  
  return (
    <nav>
      <div className="logo-container">
        <img className='logo' src={minimal ? colorLogo : logo} alt='logo'/>  
      </div>
       
      {!authToken && !minimal && (<button className="nav-button" onClick={handleClick} disabled={showModal}>Log in</button>)}   
    </nav>
  );
};

export default Nav;