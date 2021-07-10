import React, { useContext } from 'react';
import CartContext from "../../../client/src/store/cart-context";
import '../styles/cart.css';


function Cart() {


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

  return (

    <React.Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h1>Your cart</h1>
      <div class="row">
      </div>
      <div class="col-25">
        <div class="col-75">
          <div class="containerPayment">
            <form action="/action_page.php">

              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label className="label1" for="fname"><i class="fa fa-user"></i> Full Name</label>
                  <input className="textInput"  type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                  <label className="label1" for="email"><i class="fa fa-envelope"></i> Email</label >
                  <input className="textInput"  type="text" id="email" name="email" placeholder="john@example.com"></input>
                  <label className="label1" for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                  <input className="textInput"  type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                  <label className="label1" for="city"><i class="fa fa-institution"></i> City</label>
                  <input className="textInput"  type="text" id="city" name="city" placeholder="New York"></input>

                  <div class="row">
                    <div class="col-50">
                      <label className="label1" for="state">State</label>
                      <input className="textInput"  type="text" id="state" name="state" placeholder="NY"></input>
                    </div>
                    <div class="col-50">
                      <label className="label1" for="zip">Zip</label>
                      <input className="textInput"  type="text" id="zip" name="zip" placeholder="10001"></input>
                    </div>
                  </div>
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
                  <input className="textInput"  type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                  <label className="label1" for="ccnum">Credit card number</label>
                  <input className="textInput"  type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                  <label className="label1" for="expmonth">Exp Month</label>
                  <input className="textInput"  type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                  <div class="row">
                    <div class="col-50">
                      <label className="label1" for="expyear">Exp Year</label>
                      <input className="textInput"  type="text" id="expyear" name="expyear" placeholder="2018"></input>
                    </div>
                    <div class="col-50">
                      <label className="label1" for="cvv">CVV</label>
                      <input className="textInput"  type="text" id="cvv" name="cvv" placeholder="352"></input>
                    </div>
                  </div>
                </div>
              </div>
              <label className="label1" className="label1">
                <input className="textInput"  type="checkbox" checked="checked" name="sameadr"></input> Shipping address same as billing
              </label>
              <input className="textInput"  type="submit" value="Continue to checkout" class="btnCheckOut"></input>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export { Cart };