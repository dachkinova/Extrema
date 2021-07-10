import React from 'react';
import {NavDropdown} from 'react-router-dom';
import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import {HomeButton, AdventuresButton, LoginButton, CartButton, ContactsButton, LogoutButton, AccountButton, AboutButton} from './NavButtons';
import {Home} from './Home';
import {Adventures} from './Adventures';
import {Login} from './Login';
import {Register} from './Register';
import {Cart} from './Cart';
import { ProductTemplate } from './ProductTemplate';
import extrema from '../images/extrema.png';
import { BrowserRouter as Link } from "react-router-dom";
import {Contacts} from './Contacts';
import {About} from './About';
import CartProvider from '../store/CartProvider'

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
                <li><HomeButton/></li>
                <li><AdventuresButton/></li>
                <li><AboutButton/></li>
                <li><ContactsButton/></li>
                <li><CartButton/></li>
                <li><AccountButton/></li>
            </ul>
        </div>
        </nav>
        
        <Switch>
     <CartProvider>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/adventures" component={Adventures}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
            <Route exact path="/info" component={ProductTemplate}></Route>
            </CartProvider>
        </Switch>

        </Router>
        );
    }
}

export default Header;