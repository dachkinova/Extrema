import React from 'react';
import '../styles/about.css';

import inst1 from '../images/instructor.jpg';
import inst2 from '../images/instructor2.jpg';
import inst3 from '../images/instructor3.jpg';

function About() {
  
    return (
        <body className="aboutBody">

        <div class="about-section">
          <h1>About Us Page</h1>
          <p>Each of our team is qualified in their fields.</p>
          <p>They are motivating and inspired to make your experience remain a wonderful memory</p>
        </div>
        
        <h2 className="titleOurTeam">Our Team</h2>
        <div class="row">
          <div class="column">
            <div class="cardAbout">
              <img src={inst1} alt="Jane" style={{width:"100%"}}></img>
              <div class="container">
                <h2>Georgi</h2>
                <p class="title">Paragliding instuctor</p>
              </div>
            </div>
          </div>
        
          <div class="column">
            <div class="cardAbout">
              <img src={inst2} alt="Mike"  style={{width:"100%"}}></img>
              <div class="container">
                <h2>Albena</h2>
                <p class="title">Kayaking instuctor</p>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="cardAbout">
              <img src={inst3} alt="John" style={{width:"100%"}}></img>
              <div class="container">
                <h2>Petar</h2>
                <p class="title">Skydiving instructor</p>
              </div>
            </div>
          </div>
        </div>
        </body>
    );
}

export {About};