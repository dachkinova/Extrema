import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../../../client/src/store/cart-context";
import '../styles/cart.css';
import { PaymentPageButton } from './NavButtons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Cart() {

  const [cartCtx, setCartCtx] = useState(JSON.parse(localStorage.getItem('cart')));
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {

    getCartItems();
  }, []);

  const getCartItems = () => {
      let arr = [];
      let total = 0;
      for(let i = 0; i<cartCtx.length; i++) {
        let element = {
          id: cartCtx[i].id,
          title: cartCtx[i].title,
          price: cartCtx[i].price,
          quantity: cartCtx[i].quantity
        }

        total = total + cartCtx[i].price;
        arr.push(element);
      }
      setTotalPrice(total);
      setCartItems(arr);
      
  }


  // const cartItemRemoveHandler = (id) => {
  //   cartCtx.removeItem(item.id);
  // };

  const submitFunction = (event) => {
    event.preventDefault();
    {
      cartItems && cartItems.map((item) => {
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
          if (res.status === 200) {
            // history.push("/");
          }
        }).catch(e =>
          console.error(e)
        );
      })
    }
  };

  const onRem = (id) => { 
    cartItems.splice(cartItems.findIndex(v => v.id === id), 1);
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.location.reload();
  }
  return (

    <React.Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <h1>Cart</h1>

      <div class="row">


        <div class="containerCart">
          <h4>Cart <span class="price" style={{ color: "black" }}><i class="fa fa-shopping-cart"></i> <b className="counter"></b></span></h4>
          {cartItems && cartItems.map((item) => {
            return (
              <div>
                <p class="productItem"><a href="#">{item.title}   x   {item.quantity}</a> <span class="price">{item.price}</span></p>
                
                <button onClick={() => onRem(item.id)}>Remove item</button>

              </div>
            )
          })}
          {cartItems.length < 1 && 
              <div>
                <p style={{color:"red"}}>Your cart is empty.</p>
              </div>
          }

          <hr />
          <p>Total <span class="price" style={{ color: "black" }}><b className="sum">{totalPrice}</b></span></p>
        </div>

        <PaymentPageButton params={cartItems} onClick={submitFunction} />
      </div>

    </React.Fragment>
  );
}
export { Cart };