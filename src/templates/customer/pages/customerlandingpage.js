import React from "react";
import Navbar from '../../components/navbar/navbar';
import Latestarrivals from "../../components/latestarrivals/latestarrivals";
import Searchitems from "../../components/searchitems/searchitems";
import Footer from "../../components/footer/footer";
import '../styles/customerlandingpage.css';
function customerlandingpage(){
    return(
        <div>
            <Navbar/>
            <div id="cuslp-header" class="col col-sm-10 offset-1">Enjoy the Unlimited online showroom with over 1000+ latest fashions.</div>
            <div id="cuslp-first-row" class="col col-sm-10 offset-1"><p>Experience the convenience of online shopping with La Rosa de Charmante,
                 no matter where you reside on the island. Our premium products are just a click away
                  and will be delivered straight to your doorstep with the utmost care and responsibility from our team. 
                  Say goodbye to the hassle of shopping and hello to the luxury of high-quality products, 
                  all from the comfort of your home</p>
            </div>
            <Latestarrivals/>
            <Searchitems/>
            <Footer/>
        </div>
    );
}

export default customerlandingpage;