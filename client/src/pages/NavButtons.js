import React from 'react';
import { useHistory } from "react-router-dom";
import '../styles/style.css';
import Grid from '@material-ui/core/Grid';
import shoppingcart from '../images/shopping-cart.png';
import extrema from '../images/extrema.png';

import airbaloon from '../images/air-baloon.jpg';
import { handleBtns } from './Adventures';
import '../styles/inventory.css';
import axios from 'axios';

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

const AboutButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/about");
    }
    return (
        <li onClick={handleCLick}><a>About</a></li>
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

const InfoRouterButton = (props) => {
    let history = useHistory();
    console.log(props);
    const handleCLick = () => {
        history.push({
            pathname: '/info',
            state: props.props
        });
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

        axios.post('api/users/logout').then((res)=>{
            sessionStorage.setItem('loggedIn', 'false');
            sessionStorage.removeItem('user');
        });
        history.push("/login");

    }
    return (
        <li onClick={handleCLick}><a>Log out</a></li>
    )
}

const AccountButton = () => {
    let history = useHistory();

    const handleCLick = () => {
        if (sessionStorage.getItem('loggedIn') !== 'true') {
            history.push("/login");
        } else {
            history.push("/profile");
        }
    }
    return (
        <li onChange={handleCLick}> {!sessionStorage.getItem('loggedIn') ? <LoginButton /> : <LogoutButton/>}</li>
    );

}

const PaymentPageButton = (props) => {
    let history = useHistory();
    const handleCLick = () => {
        history.push({
            pathname: '/payment',
            state: props.params
        });
    }
    return (
        <input className="inputText" type="submit" value="Continue to payment" class="btnCheckOut" onClick={handleCLick}></input>
    )
}
export { HomeButton, AdventuresButton, LoginButton, RegisterButton, CartButton, ContactsButton, InfoRouterButton, LogoutButton, AccountButton, AboutButton, PaymentPageButton };