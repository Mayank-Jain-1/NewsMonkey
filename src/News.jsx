import React, { Component } from 'react'
import loading from "./loading.gif"
import NewsItems from './NewsItems'
import "./News.css"
export default class News extends Component {


  constructor(){
    super();
    this.state = {
      articles : [],
      pageNumber : 1,
      maxPage: Infinity,
      loaded: false
    };
  }
  

  updateComponent = async () => {
    this.setState({
      loaded: false
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=d9423df2bc104a68a876d1bcaa4779d2&page=${this.state.pageNumber}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      maxPage: Math.ceil(parsedData.totalResults/this.props.pageSize),
      articles: parsedData.articles,
      loaded:true
    });
  }

  async componentDidMount(){
    this.updateComponent();
  }


  handleNext = async () =>{
    this.setState({
      pageNumber: this.state.pageNumber + 1
    })
    this.updateComponent()
  }   
  handlePrevious = async () =>{
    this.setState({
      pageNumber: this.state.pageNumber - 1
    })
    this.updateComponent()
  }   
  
  capitalizeFirstLetter(str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(capitalized);
    return capitalized;
}


  render() {
    return (
      <>
      <h1 className='heading' >#Welcome to our daily NewsFeed</h1>
      <h2 className='subheading'>- Top {this.props.newsGenre.toUpperCase().slice(0,1) + this.props.newsGenre.slice(1)} News Headlines</h2>
      {!this.state.loaded && <img className='loading' src={loading} alt= "loading"/>}
      <div className="gridContainer">
        <div className='newsItemsGrid'>
          {this.state.articles && this.state.articles.map( (x) => {return                                                 <NewsItems imgUrl= {x["urlToImage"]} title= {x["title"]} description= {x["content"]} newsUrl = {x["url"]} author = {x["author"]} publishedAt ={x["publishedAt"]} newsSource = {x["source"]["name"]} />} )}
        </div>
      </div>

      {!this.state.loaded && <img className='loading' src={loading} alt= "loading"/>}

      <div className="newsNavigationContainer">
         <button disabled={this.state.pageNumber>1? false:true} style={{backgroundColor : this.state.pageNumber>1?"black":"white", borderColor: this.state.pageNumber>1?"black":"white" }}  type='button' onClick={this.handlePrevious} className='newsNavigationButton'>&larr; Previous</button>
        {this.state.pageNumber<this.state.maxPage && <button type='button' onClick={this.handleNext} className='newsNavigationButton'>Next &rarr;</button>}
      </div>
      </>
    )
  }
}
