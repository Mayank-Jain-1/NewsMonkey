import React, { useState, useEffect } from "react";
import loading from "./loading.gif";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css";


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateComponent = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.newsCountry}&category=${props.newsGenre}&apiKey=${props.apiKey}&page=${pageNumber}&pagesize=${props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    updateComponent();
    setPageNumber(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoreData = async () => {
    setPageNumber(pageNumber + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.newsCountry}&category=${props.newsGenre}&apiKey=${props.apiKey}&page=${pageNumber}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  
  

    return (
      <>
        <h1 className="heading">#Welcome to our daily NewsFeed</h1>
        <h2 className="subheading">
          - Top{" "}
          {props.newsGenre.toUpperCase().slice(0, 1) +
            props.newsGenre.slice(1)}{" "}
          News Headlines
        </h2>
        <hr />
        <br />
        <br />
        <div className="gridContainer">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<div className="loaderDiv"><img className="fetchLoading" src={loading} alt="loading" /></div>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You are all caught up</b>
              </p>
            }
          >
            <div className="newsItemsGrid">
              {articles.map((x) => {
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

export default News;
