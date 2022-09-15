import './App.css';
import React,  {useState} from 'react'
import {BrowserRouter,
        Routes,
        Route} from "react-router-dom"
import Navbar from './Navbar';
import WhatsNew from './WhatsNew';
import About from './About';
import Home from './Home';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Footer';


export const App = () => {

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
   
    return (
      <BrowserRouter>
      <LoadingBar 
        color='red'
        progress={progress}  
      />
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home apiKey = {apiKey} setProgress= {setProgress}/>}/>
            <Route path='/whatsnew' element={<WhatsNew/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes> 
        <Footer />
      </BrowserRouter>
    )
}
 
export default App;