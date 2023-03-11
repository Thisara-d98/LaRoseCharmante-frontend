import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

//common pages
import Homepage from './templates/common/pages/homepage';
import Login from './templates/common/pages/login';
import Signup from './templates/common/pages/signup';

//customer pages
import Customerlandingpage from './templates/customer/pages/customerlandingpage';
import Customerviewproduct from './templates/customer/pages/customerviewproduct';

function App() {
  return (
    <Router>
        <div className="App">
         
          <Routes>
            <Route exact path='/homepage' element ={<Homepage/>}/>
            <Route exact path='/login' element ={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/userpage' element={<Customerlandingpage/>}/>
            <Route exact path='/viewproduct' element={<Customerviewproduct/>}/>
          </Routes>
          
        </div>
    </Router>
    
  );
}

export default App;
