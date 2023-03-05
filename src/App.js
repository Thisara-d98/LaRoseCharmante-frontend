import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from './templates/common/pages/homepage';
import Login from './templates/common/pages/login';
function App() {
  return (
    <Router>
        <div className="App">
         
          <Routes>
            <Route exact path='/homepage' element ={<Homepage/>}/>
            <Route exact path='/login' element ={<Login/>}/>
          </Routes>
          
        </div>
    </Router>
    
  );
}

export default App;
