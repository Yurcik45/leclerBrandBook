import React from 'react';
import './Header.sass'
import mainLogo from '../../IMG/LandIMG/main logo.png'
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'


const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'mainLogo'}>
                <a href='/#home'><img src={mainLogo} alt='Logo will be here'/></a>
            </div>
            <ul className="mainLinks">
                <li><a href='/#home'>ГОЛОВНА</a></li>
                <li><NavLink activeClassName={'activeLink'} to='/catalog'>КАТАЛОГ</NavLink></li>
                {/*<li><NavLink activeClassName={'activeLink'} to={'#footer'}>КАТАЛОГ</NavLink></li>*/}
                {/*<li><Link to="/#footer">Your link text</Link></li>*/}
                {/*<Link to="/pathLink#yourAnchorTag">Your link text</Link>*/}
                <li><a href={'/#footer'}>КОНТАКТИ</a></li>
            </ul>
            <div className="navigationItems">
                <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 96H432V128H80V96Z" fill="black"/>
                    <path d="M80 240H432V272H80V240Z" fill="black"/>
                    <path d="M80 384H432V416H80V384Z" fill="black"/>
                </svg>

            </div>
        </div>
    );
};

export default Header;