import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Infocarousel from '../../components/infocarousel/infocarousel';
import Latestarrivals from '../../components/latestarrivals/latestarrivals';
import '../styles/homepage.css';
function homepage(){
    return (
        <div>
            <Navbar/>
            <div class="row">
                <div class="column"><Infocarousel class="carouselhomepage"/></div>
                <div class="column">
                    <h1 id="homepage-top-right">La Rose Charmante</h1>
                    <p id="homepage-top-right-content">Experience the magic of tradition and innovation combined
                     with our exceptional products. Our unique blend delivers awesome results, 
                    Discover the perfect fusion of old and new with us and unlock your true potential today!</p>
                        
                </div>
            </div>

            <div id="homepage-secondrow"><p>Why this web portal</p></div>
            <div id="homepage-third-row" class="col col-sm-10 offset-1"><p>Experience the convenience of online shopping with La Rosa de Charmante,
                 no matter where you reside on the island. Our premium products are just a click away
                  and will be delivered straight to your doorstep with the utmost care and responsibility from our team. 
                  Say goodbye to the hassle of shopping and hello to the luxury of high-quality products, 
                  all from the comfort of your home</p>
            </div>

            <div class="row col col-sm-9 offset-2">
                <div class="column card col-col-sm-3"  id="homepage-fourth-row-card">
                    <div class="card-body">
                        <h5 class="card-title">Deliver within 4 working days</h5>
                        <p class="card-text"><i class="fa-solid fa-truck"></i></p>
                    </div>
                </div>

                <div class="column card col-col-sm-3"  id="homepage-fourth-row-card">
                    <div class="card-body">
                        <h5 class="card-title">Unlimited access to wide range of products</h5>
                        <p class="card-text"><i class="fa-sharp fa-solid fa-key"></i></p>
                    </div>
                </div>

                <div class="column card col-col-sm-3"  id="homepage-fourth-row-card">
                    <div class="card-body">
                        <h5 class="card-title">Discounts,vouchers and bonuses</h5>
                        <p class="card-text"><i class="fa-solid fa-gift"></i></p>
                    </div>
                </div>

                <div class="column card col-col-sm-3"  id="homepage-fourth-row-card">
                    <div class="card-body">
                        <h5 class="card-title">Trusted and responsible service</h5>
                        <p class="card-text"><i class="fa-solid fa-hand-holding-heart"></i></p>
                    </div>
                </div>
            </div> 
            <Latestarrivals/>
            <div><Footer/></div>
            
        </div>
    );
}

export default homepage;