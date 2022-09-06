import React, { Component } from 'react'
import News from './News'
import "./Home.css"

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      newsCountry: "in",
      newsGenre: "general",
      pageSize: "15",
      changes: 0
    }
  }
  
  handleGenreSelection = async (genre) => {
    this.setState({
      newsGenre: genre,
       changes: this.state.changes === 0 ? 1 : 0
      })
    }
    
  handleCountrySelection = async (country) => {
      this.setState({
        newsCountry: country,
        changes: this.state.changes === 0 ? 1 : 0
      })
    }
    
    handlePageNumberSelection = async (size) =>{
      this.setState({
        pageSize: size.toString(),
        changes: this.state.changes === 0 ? 1 : 0
      })
  }


  
  render() {
    return (
      <>
      <div className="newsNavigation">
        <div className="genreNavigation">
          <h5>News Category: </h5>
            <ul>
              <li><button onClick={() =>{ this.handleGenreSelection("general") }} style={{backgroundColor: this.state.newsGenre === "general" ? "white" : "black" , color: this.state.newsGenre === "general" ? "black" : "white"}}>General</button></li>
              <li><button onClick={() =>{ this.handleGenreSelection("business") }} style={{backgroundColor: this.state.newsGenre === "business" ? "white" : "black" , color: this.state.newsGenre === "business" ? "black" : "white"}}>Business</button></li>
              <li><button onClick={() =>{ this.handleGenreSelection("entertainment") }} style={{backgroundColor: this.state.newsGenre === "entertainment" ? "white" : "black" , color: this.state.newsGenre === "entertainment" ? "black" : "white"}}>Entertainment</button></li>
              <li><button onClick={() =>{ this.handleGenreSelection("health") }} style={{backgroundColor: this.state.newsGenre === "health" ? "white" : "black" , color: this.state.newsGenre === "health" ? "black" : "white"}}>Health</button></li>
              <li><button onClick={() =>{ this.handleGenreSelection("sports") }} style={{backgroundColor: this.state.newsGenre === "sports" ? "white" : "black" , color: this.state.newsGenre === "sports" ? "black" : "white"}}>Sports</button></li>
              <li><button onClick={() =>{ this.handleGenreSelection("science") }} style={{backgroundColor: this.state.newsGenre === "science" ? "white" : "black" , color: this.state.newsGenre === "science" ? "black" : "white"}}>Science</button></li>
              <li><button onClick={() =>{ this.handleGenreSelection("technology") }} style={{backgroundColor: this.state.newsGenre === "technology" ? "white" : "black" , color: this.state.newsGenre === "technology" ? "black" : "white"}}>Technology</button></li>
            </ul>
        </div>

        <div className='countryNavigation'>
            <h5>Country: </h5>
            <ul>
              <li><button onClick={() =>{ this.handleCountrySelection("in") }} style={{backgroundColor: this.state.newsCountry === "in" ? "white" : "black" , color: this.state.newsCountry === "in" ? "black" : "white"}}>India</button></li>
              <li><button onClick={() =>{ this.handleCountrySelection("ca") }}  style={{backgroundColor: this.state.newsCountry === "ca" ? "white" : "black" , color: this.state.newsCountry === "ca" ? "black" : "white"}}>Canada</button></li>
              <li><button onClick={() =>{ this.handleCountrySelection("cn") }}  style={{backgroundColor: this.state.newsCountry === "cn" ? "white" : "black" , color: this.state.newsCountry === "cn" ? "black" : "white"}}>China</button></li>
              <li><button onClick={() =>{ this.handleCountrySelection("de") }}  style={{backgroundColor: this.state.newsCountry === "de" ? "white" : "black" , color: this.state.newsCountry === "de" ? "black" : "white"}}>Germany</button></li>
              <li><button onClick={() =>{ this.handleCountrySelection("gb") }}  style={{backgroundColor: this.state.newsCountry === "gb" ? "white" : "black" , color: this.state.newsCountry === "gb" ? "black" : "white"}}>UK</button></li>
              <li><button onClick={() =>{ this.handleCountrySelection("us") }}  style={{backgroundColor: this.state.newsCountry === "us" ? "white" : "black" , color: this.state.newsCountry === "us" ? "black" : "white"}}>USA</button></li>
              
            </ul>
        </div>

        <div className="pageNumberNavigation">
            <h5>News per page: </h5>
              <ul>
                <li><button onClick={() =>{ this.handlePageNumberSelection(5) }}  style={{backgroundColor: this.state.pageSize === "5" ? "white" : "black" , color: this.state.pageSize === "5" ? "black" : "white"}}>5</button></li>
                <li><button onClick={() =>{ this.handlePageNumberSelection(10) }} style={{backgroundColor: this.state.pageSize === "10" ? "white" : "black" , color: this.state.pageSize === "10" ? "black" : "white"}} >10</button></li>
                <li><button onClick={() =>{ this.handlePageNumberSelection(15) }} style={{backgroundColor: this.state.pageSize === "15" ? "white" : "black" , color: this.state.pageSize === "15" ? "black" : "white"}} >15</button></li>
                <li><button onClick={() =>{ this.handlePageNumberSelection(20) }} style={{backgroundColor: this.state.pageSize === "20" ? "white" : "black" , color: this.state.pageSize === "20" ? "black" : "white"}} >20</button></li>
                <li><button onClick={() =>{ this.handlePageNumberSelection(25) }} style={{backgroundColor: this.state.pageSize === "25" ? "white" : "black" , color: this.state.pageSize === "25" ? "black" : "white"}} >25</button></li>
              </ul>
        </div>
      </div>
      <News key={this.state.changes} newsGenre = {this.state.newsGenre} pageSize= {this.state.pageSize} newsCountry={this.state.newsCountry} />
      </>
    )
  }
}
