import React from 'react';
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css'

function Navbar(){
    return(
        <header className='navbar-container'>
            <span className='navlink-container'>
            <h2>COMMERCE</h2>
            <ul className='links'>
                <li className='link'> <a href="#">Sell</a></li>
                <li className='link'> <a href="#">Marketplace</a></li>
                <li className='link'> <a href="#">Comunity</a></li>
                <li className='link'> <a href="#">Develop</a></li>
                <li className='link'> <a href="#">Resource</a></li>
            </ul>
            </span>
            <span className='navbutton-container'>
                <h7 className='nav-button'>Log In</h7>
                <button className='nav-button normal-btn'>Get Started</button>
                <FontAwesomeIcon icon={faSearch} className={'nav-button'} />
            </span>
        </header>
    )
};

export default Navbar;