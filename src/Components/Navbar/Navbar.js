import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='navbar nav-container'>
            <div className='name'>
                <img src={logo} alt="" />
                <h1>iSpring Quiz-Maker</h1>
            </div>
            <div className='link'>
                <Link className='link-section' to='/'>Home</Link>
                <Link className='link-section' to='/chart'>Chart</Link>
                <Link className='link-section' to='/about'>About</Link>
                <Link className='link-section' to='/blog'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Navbar;