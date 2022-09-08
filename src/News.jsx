import React, { Component } from "react";
import loading from "./loading.gif";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css";


export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      pageNumber: 1,
      totalResults: 0,
    };
  }

  updateComponent = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=bac9e51e6647437caed3a2d883501d36&page=${this.state.pageNumber}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (this.state.articles !== parsedData.articles){
      this.setState({
        articles: this.state.articles.concat(parsedData.articles)
      })
    }
    this.setState({
      loaded: true,
      totalResults: parsedData.totalResults,
    });

  };

  async componentDidMount() {
    
    if (this.state.articles.length === 0) {
      this.updateComponent()
      console.log("yup");
    }else{ 
      console.log("not empty??")
    }
    
    setInterval(() => {
      // console.log(this.state)
    }, 2000);
  }

  fetchMoreData = async () => {
    this.setState({
      pageNumber: this.state.pageNumber +1,
      loaded: false
    })
    this.updateComponent();
  };
  
  

  render() {
    return (
      <>
        <h1 className="heading">#Welcome to our daily NewsFeed</h1>
        <h2 className="subheading">
          - Top{" "}
          {this.props.newsGenre.toUpperCase().slice(0, 1) +
            this.props.newsGenre.slice(1)}{" "}
          News Headlines
        </h2>
        <hr />
        <br />
        <br />
        {!this.state.loaded && (
          <img className="loading" src={loading} alt="loading" />
        )}
        <div className="gridContainer">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<img className="loading" src={loading} alt="loading" />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="newsItemsGrid">
              {this.state.articles &&
                this.state.articles.map((x) => {
                  return (
                    <NewsItems
                      imgUrl={x["urlToImage"]}
                      title={x["title"]}
                      description={x["content"]}
                      newsUrl={x["url"]}
                      author={x["author"]}
                      publishedAt={x["publishedAt"]}
                      newsSource={x["source"]["name"]}
                    />
                  );
                })}
            </div>
          </InfiniteScroll>
        </div>

        {!this.state.loaded && (
          <img className="loading" src={loading} alt="loading" />
        )}

        {/* <div className="newsNavigationContainer">
          <button
            disabled={this.state.pageNumber > 1 ? false : true}
            style={{
              backgroundColor: this.state.pageNumber > 1 ? "black" : "white",
              borderColor: this.state.pageNumber > 1 ? "black" : "white",
            }}
            type="button"
            onClick={this.handlePrevious}
            className="newsNavigationButton"
          >
            &larr; Previous
          </button>
          {this.state.pageNumber < this.state.maxPage && (
            <button
              type="button"
              onClick={this.handleNext}
              className="newsNavigationButton"
            >
              Next &rarr;
            </button>
          )}
        </div> */}
      </>
    );
  }
}
