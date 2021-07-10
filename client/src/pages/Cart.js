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


        <div class="containerCart">
          <h4>Cart <span class="price" style={{ color: "black" }}><i class="fa fa-shopping-cart"></i> <b className="counter"></b></span></h4>
          {cartItems && cartItems.map((item) => {
            return (
              <p><a href="#">{item.title}</a> <span class="price">{item.price}</span></p>
            )
          })}
          <hr />
          <p>Total <span class="price" style={{ color: "black" }}><b className="sum"></b></span></p>
        </div>

        <input className="buttonPayment inputText"  type="submit" value="Continue to payment" class="btnCheckOut"></input>


      </div>
      
    </React.Fragment>
  );
}
export { Cart };