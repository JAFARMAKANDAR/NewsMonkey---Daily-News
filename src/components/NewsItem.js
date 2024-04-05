import React from "react";

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style = {{display: 'flex', justifyConetent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className="badge rounded-pill bg-danger" >
            {source}
          </span>
          </div>
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
            <p class="card-text"><small className="text-muted"> {author ? `By ${author}` : "Unknown"} on {date ? new Date(date).toDateString() : "Unknown"} </small></p>
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


export default NewsItem;
