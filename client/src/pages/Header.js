import React from 'react';
import { NavDropdown } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { HomeButton, AdventuresButton, LoginButton, CartButton, ContactsButton, LogoutButton, AccountButton, AboutButton } from './NavButtons';
import { Home } from './Home';
import { Adventures } from './Adventures';
import { Login } from './Login';
import { Register } from './Register';
import { Cart } from './Cart';
import { PaymentPage } from './PaymentPage';
import { ProductTemplate } from './ProductTemplate';
import extrema from '../images/extrema.png';
import { BrowserRouter as Link } from "react-router-dom";
import { Contacts } from './Contacts';
import { About } from './About';
import CartProvider from '../store/CartProvider'
import { Profile } from './Profile';
import { timers } from 'jquery';

class Header extends React.Component {


    state = {
        button: ''
    };

    // componentDidMount() {
    //     setButtons(() => {
    //         this.setState(() => {
    //             return { button: ''}
    //         });
    //     });
    // }
    

    changeButtons = () => {
        if (sessionStorage.getItem('loggedIn') === 'true') {
            this.state.button = <LogoutButton />;
        } else {
            this.state.button = <LoginButton />;
        }
    }

    render() {
        this.changeButtons();

        return (
            <Router>
                <nav>
                    <Link to="/">
                        <a><img class="logo" src={extrema}></img></a>
                    </Link>
                    <div class="nav-links">
                        <ul>
                            <li><HomeButton /></li>
                            <li><AdventuresButton /></li>
                            <li><AboutButton /></li>
                            <li><ContactsButton /></li>
                            <li><CartButton /></li>
                            <li>{this.state.button}</li>
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
                        <Route exact path="/payment" component={PaymentPage}></Route>
                        <Route exact path="/profile" component={Profile}></Route>
                    </CartProvider>
                </Switch>

            </Router>
        );
    }
}

export default Header;