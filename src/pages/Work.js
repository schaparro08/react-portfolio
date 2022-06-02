import React from 'react';
import GoodDirt from './assets/gooddirtss.png'

const About = () => {
    
  
    return (
        <div class="row justify-content-center mt-4">
        <div class="col-sm-8">
          <div class="card description">
            <a href="https://josephlmurray.github.io/ThatGoodDirt/">
              <img class="card-img-top" src={GoodDirt} alt="Card cap"/>
            </a>
              <div class="card-body">
                <p class="card-text">Project 1 : That Good Dirt: The trail finding web application.</p>
              </div>
            </div>
        </div>
      </div>
       
    );
  };
  
  export default About;