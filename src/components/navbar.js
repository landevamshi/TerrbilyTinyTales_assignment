import React from 'react';
import './navbar.css';
import logo from './logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo-container'>
                <img src={logo} alt="app logo" className='img-place'/>
            </div>
            <div className='line'></div>      
            <div className='logo-text'>STORIES</div>
            <div className='nav-btn'> 
                <a href='google.com' className='a_style'>Courses</a>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
