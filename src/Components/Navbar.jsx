import React from 'react';
import logo from '../assets/logo.gif';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='header'>
            <div className='logo-appName'>
                <img src={logo} alt='' style={{ height: "8vh" }} />
                <h4 style={{fontweight:'900'}}>UR AnimatedUI</h4>
            </div>
            <ul>
                <li>About US</li>
            </ul>
        </div>
    )
}

export default Navbar