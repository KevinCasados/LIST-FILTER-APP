import React from 'react';
import logo from '../../assets/logo-kinova-fondo-negro.png'
import "./style.css"

const Header = () => {

    return (
        <header className ="header">
            <a href="#" className="logo">
                <img className='logo_img' src={logo}/>
            </a>
        </header>
    )
}

export default Header;
