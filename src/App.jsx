import './App.css';
import React, { Component } from 'react'
import {BrowserRouter,
        Routes,
        Route} from "react-router-dom"
import Navbar from './Navbar';
import WhatsNew from './WhatsNew';
import About from './About';
import Home from './Home';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
   
  render() {
    return (
      <BrowserRouter>
      <LoadingBar 
        color='red'
        progress={this.state.progress}  
      />
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home setProgress= {this.setProgress}/>}/>
          <Route path='/whatsnew' element={<WhatsNew/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes> 
      </BrowserRouter>
    )
  }
}
 