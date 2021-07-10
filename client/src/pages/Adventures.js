import React, { useState, useContext } from 'react';
import '../styles/inventory.css';
import airbaloon from '../images/air-baloon.jpg';
import skydiving from '../images/skydiving1.jpg';
import rafting from '../images/rafting.jpg';
import paraplaner from '../images/paraplanner.jpg';
import atv from '../images/atv.jpg';
import bungee from '../images/bungee.jpg';
import jet from '../images/jet.jpg';
import buggy from '../images/buggy1.jpg';
import showAll from '../images/showAll.png';
import water from '../images/water.png';
import earth from '../images/earth.png';
import air from '../images/air.png';
import fire from '../images/fire.png';
import kayaking from '../images/kayaking.jpg';
import { Button } from './NavButtons';
import { Redirect } from 'react-router-dom';
import { Cart } from './Cart';
import CartContext from "../../../client/src/store/cart-context";
import { InfoRouterButton } from './NavButtons';

import firstAirbaloon from '../images/Gallery-hotairbaloon3.jpg';
import secondAirbaloon from '../images/Gallery-hotairbaloon.jpg';
import thirdAirbaloon from '../images/Gallery-hotairbaloon2.jpg';

import firstTandem from '../images/skydive.jpg';
import secondTandem from '../images/skybyron.jpg';
import thirdTandem from '../images/skydiving.jpg';

const data = [{
    id: 0,
    name: "Hot air balloon",
    img: airbaloon,
    description: "One hour flight, with up to four passengers in the basket!",
    price: 150, 
    category: 'air',
    pathname: '/airbaloon',
    firstImage:  firstAirbaloon,
    secondImage:  secondAirbaloon,
    thirdImage:  thirdAirbaloon,
    subTitle: "Meet the sunrise high in the clouds with your loved ones!" + 
    " Participants in a hot air balloon flight will have the opportunity to" +
    " enjoy the view from a bird's eye view and literally fly where the wind blows them.",
    underDescription: "As you slowly ascend in the skies, the the true beauty of the landscape unveils infront of you."  + 
    " The adrenaline rush of flying kicks in as you feel the wind blow." + 
    " As you reach the skies, the adrenaline slowly disperses and serenity sets in." +
    " You take a deep breath and enjoy the beautiful view infront of you " +
    " as you travel from location to location. After buying a hot air balloon voucher, you must book the exact" +
    " date of the trip and come to the take-off site an hour earlier on the selected date. You will find the dates" +
    " of the hot air balloon events in Bulgaria on this page, in the WHERE AND WHEN section.",
    tourDurartion: "About 8 hours (09:30 - 17:00)",
    included: "Hotel Pick-up & Drop-off, All Entrance Fee, Professional Tour Guide" +
    "(English-Spanish), Transportation by Air-Conditioned Vehicle, Lunch, Tax",
    program: "Goreme Panorama, Underground City (Kaymakli or Derinkuyu), Rose & Red Valley, Love Valley, Pigeon Valley, Onyx Workshop and Lunch",
    lunch: "Lunch will be an open buffet. We can prepare a vegetarian menu for lunch according to your request",
    group: "Our groups are not crowded and limited to 8-12 people for each tour",
    tourDate: "You can do the full day tour on the same day or different day as the balloon tour"

}, {
    id: 1,
    name: "Tandem skydiving",
    img: skydiving,
    description: "Test your adrenaline with a tandem parachute jump, tied to a licensed instructor!",
    price: 300, 
    category: 'air',
    pathname: '/skydiving',
    firstImage:  firstTandem,
    secondImage:  secondTandem,
    thirdImage:  thirdTandem,
    subTitle: "Share a deep dive trough the bright blue skies with an instructor in a tandem skydive!" + 
    " Described by many as the ultimate thrill, tandem skydiving is a form of parachuting where a qualified" +
    " skydive instructor is connected to you during the freefall jump.",
    underDescription: "Skydiving feels like flying. Skydiving feels like soaring through the sky as a superhero ready to kick some supervillian butt."  + 
    " It is scary and yet so satisfying all at the same time. You are looking adventure straight in the eye and getting yourself psyched up." + 
    " Freefalling at 200km/h, a feeling that has to be experienced atleast once in a lifetime!" +
    " After buying a skydiving voucher, you must book the exact" +
    " date of the skydive and come to our office at 7:20am. You will find the dates" +
    " of the skydives in Bulgaria on this page, in the WHERE AND WHEN section.",
    tourDurartion: "About 5 hours (07:30 - 12:30)",
    included: "Transport to the airfield & back, Skydiving equipment, Skydiving instructor," +
    " Lunch in our local restaurant, GoPro footage of your dive!",
    program: "Departure from our office at 07:30am. Arrival at airfield 8:00am. Mandatory safety training. Take-off 8:45am. Viewing of the landscape. Skydive at 10:30am. Arival at restaurant 12:30am.",
    lunch: "Two course meal consisting of a main course and dessert. You can choose to stick to a standard fare or select whatever the menu offers that you enjoy. ",
    group: "Our aircraft can fit 4 adventurers and their instructors at a time.",
    tourDate: "Every Wednesday and Friday from June 1st to September 10th!"
}, {
    id: 2,
    name: "Whitewater rafting",
    img: rafting,
    description: "Power of the moving water is incredible. Mastering the rapids will definitely get your heart pumping!",
    price: 79, 
    category: 'water',
    pathname: '/rafting'
}, {
    id: 3,
    name: "Paragliding flight",
    img: paraplaner,
    description: "Glider paragliding - you just have to try it!",
    price: 85, 
    category: 'air',
    pathname: '/paragliding'
}, {
    id: 4,
    name: "Off road adventure with ATV",
    img: atv,
    description: "Furious speed, great views and a lot of adrenaline",
    price: 195, 
    category: 'earth',
    pathname: '/atv'
}, {
    id: 5,
    name: "Bungee jumping",
    img: bungee,
    description: "Choose one of the bungee locations in Bulgaria, take a deep breath and jump!",
    price: 59, 
    category: 'air',
    pathname: '/bungee'
}, {
    id: 6,
    name: "Jet-ski experience",
    img: jet,
    description: "Get out and ride! Our 1 & 2 hour tours are fantastic.",
    price: 109, 
    category: 'speed',
    pathname: '/jetski'
}, {
    id: 7,
    name: "Off-road buggy tour",
    img: buggy,
    description: "Our professional guides will teach you in minutes how to drive your very own 4×4 side by side.",
    price: 76, 
    category: 'earth',
    pathname: '/buggy'
}, {
    id: 8,
    name: "Kayaking adventure",
    img: kayaking,
    description: "Run on the rapids or row in calm water!",
    price: 80, 
    category: 'water',
    pathname: '/kayaking'
}]
 
function Adventures() {
    const cartCtx = useContext(CartContext);

    function myFunction() {
        var input, filter, grid, article, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        grid = document.getElementById("grid");
        article = grid.getElementsByTagName("article");
        for (i = 0; i < article.length; i++) {
            a = article[i].getElementsByClassName("product_name")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                article[i].style.display = "";
            } else {
                article[i].style.display = "none";
            }
        }
    }

    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c === "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function renderAdventuresCards() {
        return data.map((card) => {
            return (<article className="card">
                <div className={"filterDiv " +  card.category} handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={card.img} alt="" />
                            </a>
                            <InfoRouterButton props={data[card.id]}/>
                            <div className="image_overlay"></div>
                            <div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">{`$${card.price}`}</span>
                                        <span id="airbaloonItem" className="product_name"><b>{card.name}</b></span>
                                        <button className="buttonAddToCart" onClick={() => onAdd(card)}>Add to cart</button>
                                        <p className="description">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>)
        })
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    const handleBtns = (e) => {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        let grid = document.getElementById("grid");
        let article = grid.getElementsByTagName("article");
        console.log(e.target.id);
        var valueFilter = e.target.id;

        if (valueFilter !== "all") {


            for (i = 0; i < article.length; i++) {
                article[i].style.display = "none";
            }

            let count = 0;
            if (valueFilter === "all") valueFilter = "";
            for (i = 0; i < x.length; i++) {
                let arrName = x[i].className.split(" ");
                console.log(arrName[arrName.length - 1])
                if (arrName[arrName.length - 1] === valueFilter) {
                    article[count].style.display = "";
                }
                count++;
            }
        } else {
            for (i = 0; i < article.length; i++) {
                article[i].style.display = "";
            }
        }

    }

    const { cartItems, setCartItems } = useState([]);
    const onAdd = (card) => {
        cartCtx.addItem({
            id: card.id,
            title: card.name,
            price: card.price
        });
        console.log("Items:", cartCtx.items, "Item", card);
    }


    return (
        <body>
            <div id="myBtnContainer">
                <ul id="elements">
                    <li className="all btn active"><img onClick={handleBtns} id="all" value="all" className="elementIcon" src={showAll}></img>Show all</li>
                    <li className="btn water"><img onClick={handleBtns} id="water" value="water" className="elementIcon" src={water}></img>Water</li>
                    <li className="btn earth"><img onClick={handleBtns} id="earth" value="earth" className="elementIcon" src={earth}></img>Earth</li>
                    <li className="btn air" ><img onClick={handleBtns} id="air" value="air" className="elementIcon" src={air}></img>Air</li>
                    <li className="btn speed"><img onClick={handleBtns} id="speed" value="speed" className="elementIcon" src={fire}></img>Speed</li>
                </ul>
            </div>
            <div className="wrap">
                <div className="search">
                    <input id="myInput" type="text" className="searchTerm"
                        placeholder="What are you looking for?"></input>
                    <button type="submit" className="searchButton" onClick={myFunction}>
                        Go
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <main id="grid" className="grid">
                {renderAdventuresCards()}

                {/* <article id="grid" className="card filterDiv air" value="air" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={skydiving} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="skydivingItem">
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$300</span>
                                        <span id="skydivingItem" className="product_name"><b>Tandem skydiving</b></span>
                                        <button className="buttonAddToCart" id="tandemSkyDiving">Add to cart</button>
                                        <p className="description">Test your adrenaline with a tandem parachute jump, tied to a licensed
                                            instructor!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article id="grid" className="card filterDiv water" value="water" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={rafting} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="raftingItem">
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$79</span>
                                        <span id="titleSearch" className="product_name"><b>Whitewater rafting</b></span>
                                        <button className="buttonAddToCart">Add to cart</button>
                                        <p className="description">Power of the moving water is incredible. Mastering the rapids will
                                            definitely get your heart pumping!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
                {/* <article id="grid" className="card filterDiv air" value="air" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={paraplaner} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">$85</span>
                                    <span id="titleSearch" className="product_name"><b>Paragliding flight</b></span>
                                    <button className="buttonAddToCart">Add to cart</button>
                                    <p className="description">Glider paragliding - you just have to try it!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article id="grid" className="card filterDiv earth" value="earth" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={atv} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">$195</span>
                                    <span id="titleSearch" className="product_name"><b>Off road adventure with ATV</b></span>
                                    <button className="buttonAddToCart">Add to cart</button>
                                    <p className="description">Furious speed, great views and a lot of adrenaline</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article id="grid" className="card filterDiv air" value="air" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={bungee} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">$59</span>
                                    <span id="titleSearch" className="product_name"><b>Bungee jumping</b></span>
                                    <button className="buttonAddToCart">Add to cart</button>
                                    <p className="description">Choose one of the bungee locations in Bulgaria, take a deep breath and jump!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article id="grid" className="card filterDiv speed" value="water" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={jet} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">$109</span>
                                    <span id="titleSearch" className="product_name"><b>Jet-ski experience</b></span>
                                    <button className="buttonAddToCart">Add to cart</button>
                                    <p className="description">Get out and ride! Our 1 & 2 hour tours are fantastic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
                {/* <article id="grid" className="card filterDiv earth" value="earth" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={buggy} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">$76</span>
                                    <span id="titleSearch" className="product_name"><b>Off-road buggy tour</b></span>
                                    <button className="buttonAddToCart">Add to cart</button>
                                    <p className="description">Our professional guides will teach you in minutes how to drive your
                                        very own 4×4 side by side.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article id="grid" className="card filterDiv water" value="water" handleBtns={handleBtns}>
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"></div>
                            <a>
                                <img className="card-image" src={kayaking} alt="" />
                            </a>
                            <div className="middle">
                                <div className="viewMore">View more</div>
                            </div>
                            <div className="image_overlay"></div>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">$80</span>
                                    <span id="titleSearch" className="product_name"><b>Kayaking adventure</b></span>
                                    <button className="buttonAddToCart">Add to cart</button>
                                    <p className="description">Run on the rapids or row in calm water!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
            </main>


            {/* <Cart cartItems={cartItems}> </Cart> */}
        </body>
    );
}

export { Adventures };