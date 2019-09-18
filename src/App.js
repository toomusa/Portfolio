import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Resume from "./containers/Resume";
import Media from "./containers/Media";
import Memes from "./containers/Memes";
import NotFound from "./containers/NotFound";
import Footer from "./components/Footer";
import About from './containers/About';
import Sidebar from "./components/Sidebar"

export default class App extends Component {

  state = {
    homeClass: "active", 
    aboutClass: "", 
    projectsClass: "", 
    mediaClass: "", 
    memesClass: ""
  }

  setActive = (href) => {
    console.log(href)
    console.log(this.state)
    switch(href) {
      case "/":
        this.setState({
          homeClass: "active",
          aboutClass: "",
          projectsClass: "",
          mediaClass: "",
          memesClass: ""
        })
        break;
      case "/about":
        this.setState({
          homeClass: "",
          aboutClass: "active",
          projectsClass: "",
          mediaClass: "",
          memesClass: ""
        })
        break;
      case "/projects":
        this.setState({
          homeClass: "",
          aboutClass: "",
          projectsClass: "active",
          mediaClass: "",
          memesClass: ""
        })
        break;
      case "/media":
        this.setState({
          homeClass: "",
          aboutClass: "",
          projectsClass: "",
          mediaClass: "active",
          memesClass: ""
        })
        break;
      case "/memes":
        this.setState({
          homeClass: "",
          aboutClass: "",
          projectsClass: "",
          mediaClass: "",
          memesClass: "active"
        })
        break;
      default:
        this.setState({
          homeClass: "",
          aboutClass: "",
          projectsClass: "",
          mediaClass: "",
          memesClass: ""
        })
        break;
    }
  }

  // componentDidUpdate() {
  //   this.setActive(window.location.pathname)
  // }

  componentDidMount() {
    this.setActive(window.location.pathname)
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12" id="header">
              <Header activate={this.setActive} home={this.state.homeClass} about={this.state.aboutClass}
                projects={this.state.projectsClass} media={this.state.mediaClass} memes={this.state.memesClass} />
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12" id="bodyContainer">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-3" id="sidebar">
                  <Sidebar />
                </div>
                <div className="col-md-8 col-sm-8 col-xs-8" id="mainBackground">
                  <div id="main">
                    <Switch>
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/resume" component={Resume} />
                      <Route exact path="/media" component={Media} />
                      <Route exact path="/memes" component={Memes} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/" render={() => <Home activate={this.setActive} />} />
                      <Route path="*" component={NotFound} />
                    </Switch>
                  </div>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1" id="sidebar"></div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12" id="footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
 
