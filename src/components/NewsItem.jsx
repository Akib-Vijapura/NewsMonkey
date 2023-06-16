import React, { Component } from "react";

// this is react class base component
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card my-3">
        <span
          class="position-absolute top-0   translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>

        <img
          src={
            !imageUrl
              ? "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {!description
              ? "Here it is no description avaliable , if you want to read description click to read more"
              : description}
            ...
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
