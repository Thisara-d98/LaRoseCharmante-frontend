import React from 'react';
import './infocarousel.css';
import Yellowhitedress from './images/yellowhitedress.jpg';
function infocarousel(){
    return(
        <div class="col-sm-12">
            <div id="carouselExample" class="carousel slide col-6">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Yellowhitedress} class="d-block" alt="..."/>
                    </div>
                
                    <div class="carousel-item">
                        <img src={Yellowhitedress} class="d-block" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src={Yellowhitedress} class="d-block" alt="..."/>
                    </div>

                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
            
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
    
}

export default infocarousel;