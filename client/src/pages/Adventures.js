import React from 'react';
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



function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Adventures() {

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
            if (c == "all") c = "";
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
    
        // var btnContainer = document.getElementById("myBtnContainer");
        // var btns = btnContainer.getElementsByClassName("btn");
        // for (var i = 0; i < btns.length; i++) {
        //     btns[i].addEventListener("click", function () {
        //         var current = document.getElementsByClassName("active");
        //         current[0].className = current[0].className.replace(" active", "");
        //         this.className += " active";
        //     });
        // }

    return (
        <body>
        <div id="myBtnContainer">
        <ul id="elements">
            <li class="all btn active" onclick="filterSelection('all')"><img class="elementIcon" src={showAll}></img>Show all</li>
            <li class="btn water" onclick="filterSelection('water')"><img class="elementIcon" src={water}></img>Water</li>
            <li class="btn earth" onclick="filterSelection('earth')"><img class="elementIcon" src={earth}></img>Earth</li>
            <li class="btn air" onclick="filterSelection('air')"><img class="elementIcon" src={air}></img>Air</li>
            <li class="btn speed" onclick="filterSelection('speed')"><img class="elementIcon" src={fire}></img>Speed</li>
        </ul>
        </div>
        <div class="wrap">
            <div class="search">
                <input id="myInput" type="text" class="searchTerm" onkeyup="myFunction()"
                    placeholder="What are you looking for?"></input>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    
        <main id="grid" class="grid">
            <article class="card">
            <div class="filterDiv air">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={airbaloon} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$150</span>
                                <span id="titleSearch" class="product_name"><b>Hot air balloon</b></span>
                                <p class="description">One hour flight, with up to four passengers in the basket!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </article>
    
            <article id="grid" class="card filterDiv air">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={skydiving} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$300</span>
                                <span id="titleSearch" class="product_name"><b>Tandem skydiving</b></span>
                                <p class="description">Test your adrenaline with a tandem parachute jump, tied to a licensed
                                    instructor!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv water">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={rafting} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$79</span>
                                <span id="titleSearch" class="product_name"><b>Whitewater rafting</b></span>
                                <p class="description">Power of the moving water is incredible. Mastering the rapids will
                                    definitely get your heart pumping!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv air">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={paraplaner} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$85</span>
                                <span id="titleSearch" class="product_name"><b>Paragliding flight</b></span>
                                <p class="description">Glider paragliding - you just have to try it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv earth">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={atv} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$195</span>
                                <span id="titleSearch" class="product_name"><b>Off road adventure with ATV</b></span>
                                <p class="description">Furious speed, great views and a lot of adrenaline</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv air">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={bungee} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$59</span>
                                <span id="titleSearch" class="product_name"><b>Bungee jumping</b></span>
                                <p class="description">Choose one of the bungee locations in Bulgaria, take a deep breath and jump!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv water">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={jet} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$109</span>
                                <span id="titleSearch" class="product_name"><b>Jet-ski experience</b></span>
                                <p class="description">Get out and ride! Our 1 & 2 hour tours are fantastic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv earth">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={buggy} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$76</span>
                                <span id="titleSearch" class="product_name"><b>Off-road buggy tour</b></span>
                                <p class="description">Our professional guides will teach you in minutes how to drive your
                                    very own 4×4 side by side.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="grid" class="card filterDiv water">
                <div class="product-card">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <a>
                            <img class="card-image" src={kayaking} alt="" />
                        </a>
                        <div class="middle">
                            <div class="viewMore">View more</div>
                        </div>
                        <div class="image_overlay"></div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">$80</span>
                                <span id="titleSearch" class="product_name"><b>Kayaking adventure</b></span>
                                <p class="description">Run on the rapids or row in calm water!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    
    </body>
    );
}

export {Adventures};