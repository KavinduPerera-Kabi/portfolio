import React from 'react'
import './navBar.css'
import logo from '../../assests/logo.png';
import contactImg from '../../assests/contact.png'
import {Link} from 'react-scroll';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo at top left' className='logo'/>
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt='' className='desktopMenuImg'/>
        Contact Me
      </button>
    </nav>
  )
}

export default NavBar