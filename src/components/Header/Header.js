import React from 'react';
import './Header.css';
import logo from './Logo.png';
const Header = () => {
    return (
        <div>
            <header className="header row">
                <img src={logo} alt=""/>
                <input type="text" placeholder="Search.."/>
                <ul className="row">
                    <li className="nav-items"><a href='#'>News</a></li>
                    <li className="nav-items"><a href='#'>Destination</a></li>
                    <li className="nav-items"><a href='#'>Blog</a></li>
                    <li className="nav-items"><a href='#'>Contact</a></li>
                </ul>
                <a href="/Login"><button className="btns">Login</button></a>
            </header>
            
        </div>
    );
};

export default Header;