import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/business">
              <News
                key="business"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                key="entertainment"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>

            <Route exact path="/health">
              <News
                key="health"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>

            <Route exact path="/science">
              <News
                key="science"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>

            <Route exact path="/sports">
              <News
                key="sports"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>

            <Route exact path="/technology">
              <News
                key="technology"
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
