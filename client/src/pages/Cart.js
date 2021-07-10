import React, { useContext } from 'react';
import CartContext from "../../../client/src/store/cart-context";
import '../styles/cart.css';
import { PaymentPageButton } from './NavButtons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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

  const submitFunction = (event) => {
    event.preventDefault();
    {cartItems && cartItems.map((item) => {
    const itemName = item.name;
    const itemPrice = item.price; 
    
      axios({
        method: 'post',
        url: '/api/users/register',
        data: {
          itemName: itemName, 
          itemPrice: itemPrice
         
        }
      }).then(res => {
        if(res.status === 200) {
          // history.push("/");
        }
    }).catch(e => 
      console.error(e)
      );
    })}  
  };

  return (

    <React.Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h1>Your cart</h1>
      <div class="row">


        <div class="containerCart">
          <h4>Cart <span class="price" style={{ color: "black" }}><i class="fa fa-shopping-cart"></i> <b className="counter"></b></span></h4>
          {cartItems && cartItems.map((item) => {
            return (
              <p class="productItem"><a href="#">{item.title}</a> <span class="price">{item.price}</span></p>
            )
          })}
          <hr />
          <p>Total <span class="price" style={{ color: "black" }}><b className="sum"></b></span></p>
        </div>

        <PaymentPageButton params={cartItems} onClick={submitFunction}/>
      </div>
      
    </React.Fragment>
  );
}
export { Cart };