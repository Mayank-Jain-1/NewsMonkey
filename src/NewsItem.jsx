import React, { Component } from 'react'
import "./NewsItems.css"

export default class NewsItem extends Component {
  
  
  render() {
    let {title, description, imgUrl, newsUrl, author, publishedAt} = this.props;
    publishedAt = new Date(publishedAt).toGMTString();

    return (
      <div className='newsContainer'>
        <img className='newsImage' src={imgUrl? imgUrl : "https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg"} alt=""/>
        <h6 className='newsTitle'>{title}</h6>
        <p className='newsDesc'>{description?description.slice(0,description.length - 14) : ""}<p className='authordate'>By {author?author:"Unkown"} on {publishedAt} </p></p>
        <a className='learnMore' href={newsUrl}>Learn More</a>
      </div>
    )
  }
}
