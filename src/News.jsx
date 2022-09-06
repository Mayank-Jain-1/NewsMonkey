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
  

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=bac9e51e6647437caed3a2d883501d36&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,maxPage: Math.ceil(parsedData.totalResults/this.props.pageSize) , loaded:true});
  }


  handleNext = async () =>{
    this.setState({loaded:false})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=bac9e51e6647437caed3a2d883501d36&page=${this.state.pageNumber + 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles, pageNumber : this.state.pageNumber + 1 ,loaded:true});
    
  }   
  handlePrevious = async () =>{
    this.setState({loaded:false})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=bac9e51e6647437caed3a2d883501d36&page=${this.state.pageNumber - 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles, pageNumber : this.state.pageNumber - 1, loaded:true});
  }   
  
  

  render() {
    return (
      <>
      <h1 className='heading' >Welcome to our daily NewsFeed</h1>
      {!this.state.loaded ? <img className='loading' src={loading} alt= "loading"/> : ""}
      <div className="gridContainer">
        <div className='newsItemsGrid'>
          {this.state.articles? this.state.articles.map( (x) => {return <NewsItems imgUrl= {x["urlToImage"]} 
          title= {x["title"]} description= {x["content"]} newsUrl = {x["url"]} author = {x["author"]} publishedAt ={x["publishedAt"]} />} ) : ""}
        </div>
      </div>

      {!this.state.loaded ? <img className='loading' src={loading} alt= "loading"/> : ""}

      <div className="newsNavigationContainer">
         <button disabled={this.state.pageNumber>1? false:true} style={{backgroundColor : this.state.pageNumber>1?"black":"white", borderColor: this.state.pageNumber>1?"black":"white" }}  type='button' onClick={this.handlePrevious} className='newsNavigationButton'>&larr; Previous</button>
        {this.state.pageNumber<this.state.maxPage ? <button type='button' onClick={this.handleNext} className='newsNavigationButton'>Next &rarr;</button> : ''}
      </div>
      </>
    )
  }
}
