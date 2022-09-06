import './App.css';
import React, { Component } from 'react'
import {BrowserRouter,
        Routes,
        Route} from "react-router-dom"
import Navbar from './Navbar';
import WhatsNew from './WhatsNew';
import About from './About';
import Home from './Home';

export default class App extends Component {
   
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
          <Route path='/whatsnew' element={<WhatsNew/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes> 
      </BrowserRouter>
    )
  }
}
 