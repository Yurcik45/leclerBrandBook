import React from 'react';
import './Header.sass'
import mainLogo from '../../IMG/LandIMG/main logo.png'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'mainLogo'}>
                <img src={mainLogo} alt='Logo will be here'/>
            </div>
            <div className="mainLinks">
                <NavLink activeClassName={'activeLink'} exact={true} to='/home'>ГОЛОВНА</NavLink>
                <NavLink activeClassName={'activeLink'} to='/catalog'>КАТАЛОГ</NavLink>
                <NavLink activeClassName={'activeLink'} to='/contacts'>КОНТАКТИ</NavLink>
            </div>
        </div>
    );
};

export default Header;