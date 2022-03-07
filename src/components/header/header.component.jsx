import React from "react";
import './header.styles.scss';
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/cat-svg.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart.icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <h2 className="home-container">
            <Link className='home' to='/'> 
                HOME
            </Link>
            <Link className='home' to='/shop'> 
                SHOP
            </Link>
        </h2>

        <div className="options">
            <Link className='option' to='/about'> 
                ABOUT
            </Link>

            <Link className='option' to='/contact'> 
                CONTACT
            </Link>

            {currentUser? (
                <div className='option' onClick={ () => auth.signOut()}> SIGN OUT </div>
            ) : (
                <Link className='option' to='/signin'> SIGN IN </Link>
            )}

            <CartIcon />
        </div>
        
        {hidden ? null: <CartDropdown />}
       
    </div>
)

//discructure off of state to user, then distructure off of user to currentUser
const mapStateToProps = createStructuredSelector({
    //state.user (in root-reducer) -> userReducer (in user.reduce.js) -> .currentUser: action.payload -> 
    //so props currentUser: action.payload
    //currentUser: state.user.currentUser
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);