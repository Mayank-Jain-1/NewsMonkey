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
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=${this.props.apiKey}&page=${this.state.pageNumber}&pagesize=${this.props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loaded: true,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);

  };

  async componentDidMount() {
    this.updateComponent()
    this.setState({
      pageNumber: 2
    })
  }

  fetchMoreData = async () => {
    this.setState({
      pageNumber: this.state.pageNumber +1,
      loaded: false
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.newsCountry}&category=${this.props.newsGenre}&apiKey=${this.props.apiKey}&page=${this.state.pageNumber}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loaded: true,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
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
        <div className="gridContainer">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<div className="loaderDiv"><img className="fetchLoading" src={loading} alt="loading" /></div>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You are all caught up</b>
              </p>
            }
          >
            <div className="newsItemsGrid">
              {this.state.articles.map((x) => {
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
      </>
    );
  }
}
