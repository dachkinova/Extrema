import React from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import {HomeButton, AdventuresButton, LoginButton, CartButton, ContactsButton} from './NavButtons';
import {Home} from './Home';
import {Adventures} from './Adventures';
import {Login} from './Login';
import {Register} from './Register';
import {Cart} from './Cart';
import extrema from '../images/extrema.png';
import shoppingcart from '../images/shopping-cart.png';
import { BrowserRouter as Link } from "react-router-dom";
import {Contacts} from './Contacts';

class Header extends React.Component {
    
    render() {
        return (
        <Router>
        <nav>
            <Link to="/">
                <a><img class="logo" src={extrema}></img></a>
            </Link>
            <div class="nav-links">
            <ul>
                <HomeButton/>
                <AdventuresButton/>
                <li><a>About</a></li>
                <ContactsButton/>
                <CartButton/>
                <LoginButton/>
            </ul>
        </div>
        </nav>
        
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/adventures" component={Adventures}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
        </Switch>

        </Router>
        );
    }
}

export default Header;