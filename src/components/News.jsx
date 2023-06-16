import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export default class News extends Component {
  // Here we add default props
  static defaultProps = {
    pageSize: 15,
    country: "in",
    category: "genral",
  };

  //here we pass our props type
  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  cpitalizedFristChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      apiKey: process.env.REACT_APP_NEWS_API,
    };
    // document.title = `NewsMonkey - ${this.cpitalizedFristChar(
    //   this.props.`category`
    // )}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    //* this is hard code that we code
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=API_KEY&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });

    // * this is our new easy code that we code
    this.updateNews();
  }

  handlePreviousClick = async () => {
    //* this is hard code that we code
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${this.props.category}&apiKey=process.envREACT_APP_NEWS_API&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });

    // * this is our new easy code that we code
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    //* this is hard code that we code
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${this.props.category}&apiKey=API_KEY&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }

    // * this is our new easy code that we code
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <div>
            <h1
              className="text-center text-capitalize"
              style={{ margin: "35px 0px", marginTop: "90px" }}
            >
              NewsMonkey - {this.props.category}
            </h1>
            {this.state.loading && <Loading />}
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              <div className="container d-flex justify-content-between">
                <button
                  disabled={this.state.page <= 1}
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handlePreviousClick}
                >
                  &larr; Previous
                </button>
                <button type="button" className="btn btn-dark">
                  {this.state.page}
                </button>
                <button
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handleNextClick}
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
