import React from 'react';
import '../styles/style.css';
import medalicon from '../images/medal-icon.png';
import delivery from '../images/delivery.png';
import pay from '../images/pay.png';
import returnimage from '../images/return.png';
import priceicon from '../images/price-icon.png';
import gift from '../images/gift.png';



function Home() {
    return (
    <React.Fragment>
        <div className="hero-image">
        <div className="hero-text">
          <h1>The adventures <br/>are waiting for you</h1>
          <p className="subtitle">Conquer your fears</p>
          {/* <form action="html/inventory.html"> */}
          <button className="buttonTitle" type="submit"><span>Pick an adventure</span></button>
        {/* </form> */}
        </div>
      </div>
  
      <table className="aboutMenu">
        <tr>
            <td>
              <div className="icon-set">
              <img className="icons" src={medalicon}></img>
              <span className="icon-texts">
                We work with the best certified instructors
              </span>
              </div>
            </td>
            <td>
              <div className="icon-set">
              <img className="icons" src={delivery}></img>
              <span className="icon-texts">
               Fast delivery - up to 2 days the voucher will be in your hands
              </span>
            </div>
            </td>
            <td>
              <div className="icon-set">
              <img className="icons" src={pay}></img>
              <span className="icon-texts">
                You can pay by card, by bank or directly to the courier
              </span>
            </div>
            </td>
        </tr>
        <tr>
            <td>
              <div className="icon-set">
              <img className="icons" src={returnimage}></img>
              <span className="icon-texts">
                You can easily replace the chosen adventure with another
              </span>
            </div>
            </td>
            <td>
              <div className="icon-set">
              <img className="icons" src={priceicon}></img>
              <span className="icon-texts">
                We offer the best prices so you can save money and take more adventures
              </span>
            </div>
            </td>
            <td>
              <div className="icon-set">
              <img className="icons" src={gift}></img>
              <span className="icon-texts">
                Buy an adventure as a gift and you will receive it in a beautiful gift box
              </span>
            </div>
            </td>
        </tr>
      </table>
      </React.Fragment>
    );
}

export {Home};