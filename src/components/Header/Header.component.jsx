import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Header.styles.css';

import { auth } from './../../firebase/firebase.utils';

import { ReactComponent as Logo } from './../../assets/images/logo/logo.svg';
import CartIcon from './../CartIcon/CartIcon.component';
import CartDropdown from './../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = (props) => {
    console.log(props);
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
                {props.currentUser ? 
                    <div className = "Option" onClick = {() => auth.signOut()}> LOGOUT </div> :
                    <Link to = "/auth" className = "Option">
                        LOGIN/SIGNUP
                    </Link>
                }

                <CartIcon />
            </div>

            { props.hidden ?
                null :
                <CartDropdown />
            }

        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         currentUser : state.user.currentUser,
//         hidden : state.cart.hidden
//     };
// }

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);