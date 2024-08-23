import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    return (
        <div className='full-nav'>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        {/* <img className='logo-yoo' src={Logo} alt="logo" /> */}
                        <i class='fab fa-typo3' />
                    </Link>

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href='/' className='nav-links'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/about' className='nav-links'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/blogs' className='nav-links'>Blogs</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/projects' className='nav-links'>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;



