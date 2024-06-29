import React, { useState } from 'react';
import logo from './../../img/icons/logo.svg'
import './header.css'

function Header () {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="Logo" />
                        <span>Fashion</span>
                    </div>
                    <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#!">CATALOGUE</a></li>
                            <li><a href="#!">FASHION</a></li>
                            <li><a href="#!">FAVOURITE</a></li>
                            <li><a href="#!">LIFESTYLE</a></li>
                            <li><a href="#!" className='header__nav-btn'>SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;