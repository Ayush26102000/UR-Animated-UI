import React from 'react';
import logo from '../assets/logo.gif';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='header'>
            <div className='logo-appName'>

                <Link to={'/About'} style={{ textDecoration: 'none', color: '#000' }}>
                    <img src={logo} alt='' style={{ height: "8vh" }} />
                </Link>
                <h4 style={{ fontweight: '900' }}>UR AnimatedUI</h4>
            </div>
            <ul>
                <Link to={'/About'} style={{ textDecoration: 'none', color: '#000' }}>
                    <li>About US</li>
                </Link>

            </ul>
        </div>
    )
}

export default Navbar