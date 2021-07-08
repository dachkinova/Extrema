import React from 'react';
import {useHistory} from "react-router-dom";
import '../styles/style.css';
import Grid from '@material-ui/core/Grid';
import shoppingcart from '../images/shopping-cart.png';
import extrema from '../images/extrema.png';

import airbaloon from '../images/air-baloon.jpg';
import {handleBtns} from './Adventures';
import '../styles/inventory.css';

const HomeButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/");
    }
    return (
       <li onClick={handleCLick}><a>Home</a></li>
    )
}

const AdventuresButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/adventures");
    }
    return (
       <li onClick={handleCLick}><a>Adventures</a></li>
    )
}

const LoginButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/login");
    }
    return (
       <li onClick={handleCLick}><a>Login</a></li>
    )
}

const RegisterButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/register");
    }
    return (
       <Grid container>
            <Grid item>
              <a onClick={handleCLick} href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </a>
            </Grid>
       </Grid>
    )
}

const CartButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/cart");
    }
    return (
        <li><a onClick={handleCLick}><img class="cart-image" src={shoppingcart}></img></a></li>
    )
}

const ContactsButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/contacts");
    }
    return (
       <li onClick={handleCLick}><a>Contact us</a></li>
    )
}

const AirBaloonButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/airbaloon");
    }
    return (
        <div class="middle">
              <div class="viewMore" onClick={handleCLick}>View more</div>
        </div>
    )
}

const LogoutButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/logout");
    }
    return (
       <li onClick={handleCLick}><a>Log out</a></li>
    )
}

const AccountButton = () => {
    let history = useHistory();

    const handleCLick = () => {
        if(sessionStorage.getItem('loggedIn') !== 'true') {
            history.push("/login");
        } else {
            history.push("/profile");
        }
    }
        return (
            <li onClick={handleCLick}> {!sessionStorage.getItem('loggedIn') ? <LoginButton/> : <LogoutButton/>}</li>
        );
    
}


export {HomeButton, AdventuresButton, LoginButton, RegisterButton, CartButton, ContactsButton, AirBaloonButton, LogoutButton, AccountButton};