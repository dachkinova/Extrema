import React, { useContext, useStyles, useState } from 'react';
import CartContext from "../../../client/src/store/cart-context";
import '../styles/cart.css';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PaymentPage() {

  const location = useLocation();
  const [params, setParams] = useState(location.state);
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;


  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // const onRemove = () => {
  //   cartItems && cartItems.map((item) => {
  //     cartItemRemoveHandler.bind(null, item.id);
  //   });
  // };

  let history = useHistory();

  const [fullname, setFullName] = useState('');
  const [email, setMail] = useState('');
  const [address, setAddr] = useState('');
  const [city, setCityName] = useState('');

  const submitFun = (event) => {
    event.preventDefault();
    const enteredFullName = fullname;
    const enteredEmail = email;
    const enteredAddress = address;
    const enteredCity = city;

    axios({
      method: 'post',
      url: '/api/order/makeOrder',
      data: {
        enteredFullName: enteredFullName,
        enteredEmail: enteredEmail,
        enteredAddress: enteredAddress,
        enteredCity: enteredCity,
        adventure: params
      }
    }).then((res) => {
      if (res.status === 200) {
        alert("Your order has been successfully placed!")
        history.push("/");
      }
    }).catch(e =>
      console.error(e)
    );


  };


  const setFName = (e) => {
    setFullName(e.target.value);
  }

  const setEmail = (e) => {
    setMail(e.target.value);
  }

  const setAddress = (e) => {
    setAddr(e.target.value);
  }

  const setCity = (e) => {
    setCityName(e.target.value);
  }

  return (

    <React.Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h1>Your cart</h1><br />
      <div class="col-25">
        <div class="col-75">
          <div class="containerPayment">
            <form action="/action_page.php">

              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label className="label1" for="fname"><i class="fa fa-user"></i> Full Name</label>
                  <input className="textInput" type="text" id="fname" name="firstname" onChange={setFName}></input>
                  <label className="label1" for="email"><i class="fa fa-envelope"></i> Email</label >
                  <input className="textInput" type="text" id="email" name="email" onChange={setEmail}></input>
                  <label className="label1" for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                  <input className="textInput" type="text" id="adr" name="address" onChange={setAddress}></input>
                  <label className="label1" for="city"><i class="fa fa-institution"></i> City</label>
                  <input className="textInput" type="text" id="city" name="city" onChange={setCity}></input>

                </div>

                <div class="col-50">
                  <h3>Payment</h3>
                  <label className="label1" for="fname">Accepted Cards</label>
                  <div class="icon-container">
                    <i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                    <i class="fa fa-cc-discover" style={{ color: "orange" }}></i>
                  </div>
                  <label className="label1" for="cname">Name on Card</label>
                  <input className="textInput" type="text" id="cname" name="cardname"></input>
                  <label className="label1" for="ccnum">Credit card number</label>
                  <input className="textInput" type="text" id="ccnum" name="cardnumber"></input>
                </div>
              </div>
              <input className="textInput" type="submit" value="Make order" class="btnCheckOut" onClick={submitFun}></input>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export { PaymentPage };