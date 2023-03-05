import React,{useState} from 'react';
import { FontAwesomeIcon } from 'react-fontawesome';
import Link from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../../common/pages/login';

import './navbar.css';
function navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a id="navbar-logo" class="m-4 navbar-brand" href="#">La rose Charmante</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="/homepage" aria-current="page">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">About us</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Contact us</a></li>
                            <li class="nav-item"><a class="nav-link disabled">fashion Tips</a></li>
                            <a class="nav-link" href="login"><button class="btn loginbtn-navbar" >login</button></a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default navbar;