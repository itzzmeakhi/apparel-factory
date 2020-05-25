import React from 'react';
import { Link } from 'react-router-dom';

import './Header.styles.css';

import { ReactComponent as Logo } from './../../assets/images/logo/logo.svg';

const Header = (props) => {
    return(
        <div className = "Header">
            <div className = "ImageContainer">
                <Link to = "/">
                    <Logo className = "Logo" />
                </Link>
            </div>
            <div className = "OptionsContainer">
                <Link to = "/shop" className = "Option">
                    SHOP
                </Link>
                <Link to = "/contact" className = "Option">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;