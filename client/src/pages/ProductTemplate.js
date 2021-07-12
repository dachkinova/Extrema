import React, { useEffect, useState, useContext } from 'react';
import '../styles/productTemplate.css';
import $ from 'jquery'; 
import axios from 'axios';
import {useLocation} from "react-router-dom";

import CartContext from "../../../client/src/store/cart-context";

function ProductTemplate() {
    const location = useLocation();
    const [params, setParams] = useState(location.state);
    const [slides, setSlides] = useState(document.getElementsByClassName('mySlides'));
    const [dots, setDots] = useState(document.getElementsByClassName('dot'));
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(()=> {
        showSlides(slideIndex);

    }, []);
  
    const plusSlides = () => {
      let index = slideIndex + 1;
      showSlides(index);
    };

    const minusSlides = () => {
      let index = slideIndex - 1;
      showSlides(index);
    };
  
    const currentSlide = (event) => {
      showSlides(parseInt(event.target.id));
    }
  
      const showSlides = (indexToShow) => {
        if(slides.length > 0){

          
          if(indexToShow < 0){
            indexToShow = slides.length - 1;
          }
          if(indexToShow === slides.length){
            indexToShow = 0;
          }
          setSlideIndex(indexToShow);
          
            for (let i = 0; i < slides.length; i++) {
              if(i === indexToShow){
                slides[indexToShow].style.display = "block";
                dots[indexToShow].className += " active";
              } else {
                slides[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
              }
            }
        }
    }
  
    function render(data) {
        let html = "<div className='commentBox'><div className='date'>"+data.name+"</div><div className='content'>"+data.textBoxOpinion+"</div></div>"
        $('#container').append(html);
    }
  
    $(document).ready(function() {
        let review;
        for(let i=0; i<0; i++) {
          render(review[i]);
        }
      });

     const [content, setCont] = useState('');
     const [name, setNameInput] = useState('');
     const [email, setMail] = useState('');
     const [rating, setRat] = useState('');

    const sendReview = (event) => {
    event.preventDefault();
    const enteredContent = content;
    const enteredName = name;
    const enteredEmail = email; 
    const enteredRating = rating;
    
      axios({
        method: 'post',
        url: '/api/review/postReview',
        data: {
          content: enteredContent, 
          name: enteredName,
          email: enteredEmail,
          rating: enteredRating
         
        }
      }).catch(e => 
      console.error(e)
      );
  };

      const setContent = (e) => {
        setCont(e.target.value);
      }
    
      const setName = (e) => {
        setNameInput(e.target.value);
      }
    
      const setEmail = (e) => {
        setMail(e.target.value);
      }  

      const setRating = (e) => {
        setRat(e.target.value);
      }  
      const cartCtx = useContext(CartContext);
      const onAdd = () => {

        if (sessionStorage.getItem('loggedIn') === 'true') {
            cartCtx.addItem({
                id: params.id,
                title: params.name,
                price: params.price
            });
            alert( params.name + " is added to your cart. Click cart to see your order status.")
           
        } else {
            alert("You must log in before making an order.")
        }
    }

    return (
        <body>

            <div className="contentBox">
                <h1>{params.name}</h1>
                <div className="center">
                    <h2 className="subTitle">{params.subTitle}</h2>
                </div>
            <section className="container">
                <div className="leftSide">
                <div className="slideshow-container">

                <div id="mySlides" className="mySlides fade">
                     <img src={params.firstImage} style={{width:"100%"}}></img>
                </div>

                <div id="mySlides" className="mySlides fade">
                <img src={params.secondImage} style={{width:"100%"}}></img>
                </div>

                <div id="mySlides" className="mySlides fade">
                <img src={params.thirdImage} style={{width:"100%"}}></img>
                </div>

                <div className="prev" onClick={minusSlides}>&#10094;</div>
                <div className="next" onClick={plusSlides}>&#10095;</div>
                </div> <br/>

                    <div className="dots">
                    <span className="dot" id="0" onClick={currentSlide}></span>
                    <span className="dot" id="1" onClick={currentSlide}></span>
                    <span className="dot" id="2" onClick={currentSlide}></span>
                    </div>
    

                </div>
                <div className="rightSide">
                    <div className="description"><b>Tour Duration:</b> {params.tourDurartion}<br/><br/>
                    <b>Included:</b> <p>{params.included}</p><br/><br/>
                    <b>Program:</b> <p>{params.program}</p></div>
                    <button type="submit" form="nameform" value="Submit" className="bookButton" onClick={onAdd}>Book now</button>
                    </div>
                    </section>
                <p className="additionalInfo">Additional information</p>
                <div className="subDescription"><b>Lunch:</b> {params.lunch}<br/><br/>
                <b>Group Size:</b> <p>{params.group}</p><br/><br/>
                <b>Tour Date:</b> <p>{params.tourDate}</p>
                </div>
                <p className="underDescription">{params.underDescription}</p>

                    <div className="review">
                    <h2 className="titleOpinion">Write your opinion:</h2>
                    <h3 className="ratingTitle">Rating</h3>
                    <div className="rate">
                        <input type="radio" id="star5" name="rate" value="5" onClick={setRating}></input>
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" onClick={setRating}></input>
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" onClick={setRating}></input>
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" onClick={setRating}></input>
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" onClick={setRating}></input>
                        <label for="star1" title="text">1 star</label>
                    </div>
                    <br/>
                    <div>
                        <input className="textBoxOpinion" type="text" id="textBoxOpinion" onChange={setContent}></input><br/>
                    </div>
                    <div className="textBox">
                        <h3>Your name:</h3>
                        <input className="textBoxInfo" type="text" id="name" onChange={setName}></input><br/>
                    </div>
                    <div className="textBox">
                        <h3>Your email:</h3>
                        <input className="textBoxInfo" type="text" id="email" onChange={setEmail}></input><br/>
                    </div>
                    <button disabled={!content || !name || !email} type="submit" form="nameform" value="Submit" className="submitButton" id="addReview" onClick={sendReview}>Submit</button>
                    </div>
                </div>
        </body>
    );
}

export {ProductTemplate};