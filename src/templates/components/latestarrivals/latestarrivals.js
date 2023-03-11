import React from 'react';
import yellowfrock from './images/yellowfrock.jfif';

import './latestarrivals.css';
function latestarrivals(){
    return(
      <div class="container"> 
        <div class="row m-5">
            <div class="card col col-sm-3" id="latestarrivalscard">
                <img src={yellowfrock} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Free-style-long-frock</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/viewproduct" class="btn btn-warning">View dress</a>
                </div>
            </div>

            <div class="card col col-sm-3" id="latestarrivalscard">
                <img src={yellowfrock} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Free-style-long-frock</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/viewproduct" class="btn btn-warning">View dress</a>
                </div>
            </div>

            <div class="card col col-sm-3" id="latestarrivalscard">
                <img src={yellowfrock} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Free-style-long-frock</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-warning">View dress</a>
                </div>
            </div>

            <div class="card col col-sm-3" id="latestarrivalscard">
                <img src={yellowfrock} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Free-style-long-frock</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-warning">View dress</a>
                </div>
            </div>
        </div>
      </div> 
    
    );
}

export default latestarrivals;