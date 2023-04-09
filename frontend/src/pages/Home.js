import React from 'react'
import Nav from '../components/Nav'

const Home = () => {

  const authToken = true

  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <>
    <Nav minimal={false}/>
    <div className='home'>
      <h1>Sweep Right®</h1>
      <button className='primary-button' onClick={handleClick}>
        {authToken ? 'Sign Out' : 'Create Account'}
      </button>
    </div>
    </>
  )
}

export default Home
