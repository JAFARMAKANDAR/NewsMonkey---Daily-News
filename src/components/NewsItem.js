import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: '1'}}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.hindustantimes.com/ht-img/img/2024/03/29/1600x900/The-hijacked-fishing-vessel-was-around-90-nautical_1711728459871.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small className="text-muted">By {author ? `By ${author}` : "Unknown"} on {date ? new Date(date).toDateString() : "Unknown"} </small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
