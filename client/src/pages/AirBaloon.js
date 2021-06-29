import React from 'react';
import '../styles/inventory.css';

function AirBaloon() {

    return (
        <body>

            <div class="contentBox">
                <h1>Hot air balloon</h1>
                <div class="center">
                    <h2 class="subTitle">Meet the sunrise high in the clouds with your loved ones!
                    Participants in a hot air balloon flight will have the opportunity to enjoy the view from a bird's eye view and literally fly where the wind blows them.</h2>
                </div>
            <section class="container">
                <div class="leftSide">
                <div class="slideshow-container">

                <div class="mySlides fade">
                     <img src="../images/Gallery-hotairbaloon3.jpg" style="width:100%"></img>
                </div>

                <div class="mySlides fade">
                <img src="../images/Gallery-hotairbaloon.jpg" style="width:100%"></img>
                </div>

                <div class="mySlides fade">
                <img src="../images/Gallery-hotairbaloon2.jpg" style="width:100%"></img>
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

                </div> <br/>

                    <div class="dots">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                    </div>
    

                </div>
                <div class="rightSide">
                    <div class="description"><b>Tour Duration:</b> About 8 hours (09:30 - 17:00)<br/><br/>
                    <b>Included:</b> <p>Hotel Pick-up & Drop-off, All Entrance Fee, Professional Tour Guide (English-Spanish), Transportation by Air-Conditioned Vehicle, Lunch, Tax</p><br/><br/>
                    <b>Program:</b> <p>Goreme Panorama, Underground City (Kaymakli or Derinkuyu), Rose & Red Valley, Love Valley, Pigeon Valley, Onyx Workshop and Lunch</p></div>
                    <button type="submit" form="nameform" value="Submit" class="bookButton">Book now</button>
                    </div>
                    </section>
                <p class="additionalInfo">Additional information</p>
                <div class="subDescription"><b>Lunch:</b> Lunch will be an open buffet. We can prepare a vegetarian menu for lunch according to your request<br/><br/>
                <b>Group Size:</b> <p>Our groups are not crowded and limited to 8-12 people for each tour</p><br/><br/>
                <b>Tour Date:</b> <p>You can do the full day tour on the same day or different day as the balloon tour</p>
                </div>
                <p class="underDescription">
                Your body tingles. If the wind didn't whistle in your ears, you would hear your own heart. 
                Adrenaline makes you scream like you've never screamed before. Some people meditate to 
                silence their minds. You muffle it with a bungee - it's faster.

                After buying a bungee voucher for any location, you must book the exact 
                date of the jump and come to the selected location. You will find the dates
                of the bungee events in Bulgaria on this page, in the WHERE AND WHEN section.</p>

                    <div class="review">
                    <h2 class="titleOpinion">Write your opinion:</h2>
                    <h3 class="ratingTitle">Rating</h3>
                    <div class="rate">
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
                        <input class="textBoxOpinion" type="text" id="textBoxOpinion"></input><br/>
                    </div>
                    <div class="textBox">
                        <h3>Your name:</h3>
                        <input class="textBoxInfo" type="text" id="name"></input><br/>
                    </div>
                    <div class="textBox">
                        <h3>Your email:</h3>
                        <input class="textBoxInfo" type="text" id="email"></input><br/>
                    </div>
                    <button type="submit" form="nameform" value="Submit" class="submitButton" id="addReview">Submit</button>
                    </div>
                </div>
        </body>
    );
}

export {AirBaloon};