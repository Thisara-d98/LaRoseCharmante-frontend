import React from 'react';
import {FontAwesome} from 'react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';
function footer(){
    return(
        <div id ="footer-area">
            <div class="text-center text-lg-start text-black">
                <div class="container p-4 pb-0">
                    <section class="">
                        <div class="row">
                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase text-danger mb-4 font-weight-bold">La Rose Charmante</h6>
                                <p>No 35<br/>
                                Srimath Anagarika Dharmapala MW<br/>Colombo -003
                                </p>
                            </div>
                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase text-danger mb-4 font-weight-bold">Products</h6>
                                <p>Youthwears</p>
                                <p>Assesceries</p>
                                <p>Costumes</p>
                                <p>many more</p>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <p class="text-uppercase  text-danger mb-4">Visit us @everyday 9am-9pm</p>
                                <p class="text-black"> We are inspired by latest European fashionwear. Our mission is to be the market leader in delivering quality clothing products with latest fashions </p>
                            </div>
                        </div>
                    </section>


                    

                    <section class="p-3 pt-0">
                        <div class="row d-flex align-items-center">
                            <div class="col-md-7 col-lg-8 text-center text-md-start">
                                <div class="p-3">
                                     © 2023 Copyright:<p class="text-white"> larosecharmante.com</p>
                                </div>

                                <div>
                                    <a href="#"><i class="fa-brands fa-facebook fa-2x text-dark"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram fa-2x text-dark"></i></a>
                                    <a href="#"><i class="fa-brands fa-whatsapp fa-2x text-dark"></i></a>
                                </div>
                            </div>
                            
                            
                        </div>
                    </section>
                </div>
            </div>
            <script src="https://kit.fontawesome.com/c928f87ccb.js" crossorigin="anonymous"></script>
        </div>
    );
}

export default footer;