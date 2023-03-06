import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from './templates/common/pages/homepage';
import Login from './templates/common/pages/login';
import Signup from './templates/common/pages/signup';
import Customerlandingpage from './templates/customer/pages/customerlandingpage';

function App() {
  return (
    <Router>
        <div className="App">
         
          <Routes>
            <Route exact path='/homepage' element ={<Homepage/>}/>
            <Route exact path='/login' element ={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/userhome' element={<Customerlandingpage/>}/>
          </Routes>
          
        </div>
    </Router>
    
  );
}

export default App;
