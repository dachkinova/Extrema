import React, { useEffect, useState } from 'react';
import '../styles/parachute.css';
import first from '../images/Gallery-hotairbaloon3.jpg';
import second from '../images/Gallery-hotairbaloon.jpg';
import third from '../images/Gallery-hotairbaloon2.jpg';
import $ from 'jquery'; 
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

function AirBaloon() {

    const [slides, setSlides] = useState([]);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        let slidstest = document.getElementsByClassName('mySlides');
        setSlides(slidstest);
        let dts = document.getElementsByClassName('dot');
        setDots(dts);
        showSlides(1);

    }, []);
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    };
  
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
      function showSlides(n) {
        if(slides.length > 0 && dots.length > 0){

        
        let i;
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
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

    const sendReview = (event) => {
    event.preventDefault();
    const enteredContent = content;
    const enteredName = name;
    const enteredEmail = email; 
    
      axios({
        method: 'post',
        url: '/api/review/postReview',
        data: {
          content: enteredContent, 
          name: enteredName,
          email: enteredEmail
         
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

    return (
        <body>

            <div className="contentBox">
                <h1>Hot air balloon</h1>
                <div className="center">
                    <h2 className="subTitle">Meet the sunrise high in the clouds with your loved ones!
                    Participants in a hot air balloon flight will have the opportunity to enjoy the view from a bird's eye view and literally fly where the wind blows them.</h2>
                </div>
            <section className="container">
                <div className="leftSide">
                <div className="slideshow-container">

                <div id="mySlides" className="mySlides fade">
                     <img src={first} style={{width:"100%"}}></img>
                </div>

                <div id="mySlides" className="mySlides fade">
                <img src={second} style={{width:"100%"}}></img>
                </div>

                <div id="mySlides" className="mySlides fade">
                <img src={third} style={{width:"100%"}}></img>
                </div>

                <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={plusSlides(1)}>&#10095;</a>

                </div> <br/>

                    <div className="dots">
                    <span className="dot" onClick={currentSlide(1)}></span>
                    <span className="dot" onClick={currentSlide(2)}></span>
                    <span className="dot" onClick={currentSlide(3)}></span>
                    </div>
    

                </div>
                <div className="rightSide">
                    <div className="description"><b>Tour Duration:</b> About 8 hours (09:30 - 17:00)<br/><br/>
                    <b>Included:</b> <p>Hotel Pick-up & Drop-off, All Entrance Fee, Professional Tour Guide (English-Spanish), Transportation by Air-Conditioned Vehicle, Lunch, Tax</p><br/><br/>
                    <b>Program:</b> <p>Goreme Panorama, Underground City (Kaymakli or Derinkuyu), Rose & Red Valley, Love Valley, Pigeon Valley, Onyx Workshop and Lunch</p></div>
                    <button type="submit" form="nameform" value="Submit" className="bookButton">Book now</button>
                    </div>
                    </section>
                <p className="additionalInfo">Additional information</p>
                <div className="subDescription"><b>Lunch:</b> Lunch will be an open buffet. We can prepare a vegetarian menu for lunch according to your request<br/><br/>
                <b>Group Size:</b> <p>Our groups are not crowded and limited to 8-12 people for each tour</p><br/><br/>
                <b>Tour Date:</b> <p>You can do the full day tour on the same day or different day as the balloon tour</p>
                </div>
                <p className="underDescription">
                Your body tingles. If the wind didn't whistle in your ears, you would hear your own heart. 
                Adrenaline makes you scream like you've never screamed before. Some people meditate to 
                silence their minds. You muffle it with a bungee - it's faster.

                After buying a bungee voucher for any location, you must book the exact 
                date of the jump and come to the selected location. You will find the dates
                of the bungee events in Bulgaria on this page, in the WHERE AND WHEN section.</p>

                    <div className="review">
                    <h2 className="titleOpinion">Write your opinion:</h2>
                    <h3 className="ratingTitle">Rating</h3>
                    <div className="rate">
                        <input type="radio" id="star5" name="rate" value="5"></input>
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4"></input>
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3"></input>
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2"></input>
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1"></input>
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

export {AirBaloon};