import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const allpaste = useSelector((state) => state.paste.pastes);
  
  return (
    <div className='nav bg-black flex gap-4 place-content-evenly'>
      <NavLink to='/'>
        Home
      </NavLink> 
      <NavLink to='/pastes'>
        pastes
      </NavLink>
    </div>
  )
}

export default Navbar
