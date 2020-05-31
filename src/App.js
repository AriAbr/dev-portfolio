import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/welcome.css';
import './css/main-display.css';
import './css/resume.css';
import './css/projects.css';
import './css/contact.css';
import './css/burger-menu.css';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adjustedScrollPosition: 0,
      realScrollPosition: 0,
      mainHeaderHeight: null,
      adjustedInnerWidth: 960, //0, 960
      currPage: "Projects",
      isScrolling: false,
    };
  }

  extUpdateCurrPage(page){
    if(page !== this.state.currPage){
      this.setState({ currPage: page });
    }
    this.setState({isScrolling: true});
  }

  setAdjustedInnerWidth(innerWidth){
    var oldInnerWidth = this.state.adjustedInnerWidth;
    var adjustedInnerWidth = innerWidth;
    if (adjustedInnerWidth >= 960) {
      adjustedInnerWidth = 960;
    } else if (adjustedInnerWidth >= 625 && adjustedInnerWidth < 960) {
      adjustedInnerWidth = 625;
    } else {
      adjustedInnerWidth = 0;
    }
    if (adjustedInnerWidth !== this.state.adjustedInnerWidth){
      this.setState({ adjustedInnerWidth: adjustedInnerWidth }, () => {
        //prevent scroll jumping after screen resize
        if(this.state.adjustedScrollPosition === 236){
          var oldScrollPosition = null;
          var newScrollPosition = null;
          if (adjustedInnerWidth === 625 && oldInnerWidth === 960) {
            oldScrollPosition = window.pageYOffset;
            newScrollPosition = oldScrollPosition - 236;
            window.scrollTo(0, newScrollPosition);
          } else if (adjustedInnerWidth === 960) {
            oldScrollPosition = window.pageYOffset;
            newScrollPosition = oldScrollPosition + 236;
            window.scrollTo(0, newScrollPosition);
          }
        } else if (this.state.adjustedScrollPosition < 236 && adjustedInnerWidth === 960){
          window.scrollTo(0, 0);
        }
      });
    }
  }

  updateIsScrolling(boolean){
    this.setState({ isScrolling: boolean });
  }

  componentDidMount(){
    var currentURL = window.location.href;
    var currPage = currentURL.split("/")[3] || "";
    if (currPage === "") {
      currPage = "Projects";
    } else if (currPage === "resume") {
      currPage = "Resume";
    } else if (currPage === "contact") {
      currPage = "Contact";
    }

    this.setState({
      currPage: currPage,
    });

    this.setAdjustedInnerWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      this.setAdjustedInnerWidth(window.innerWidth);
    });
    //listen for scroll position
    document.addEventListener("scroll", (e) => {
      var realScrollPosition = window.pageYOffset;
      var adjustedScrollPosition = realScrollPosition > 236 ? 236 : realScrollPosition;
      this.setState({
        adjustedScrollPosition: adjustedScrollPosition,
      })
    })
  }

  render() {
    const adjustedScrollPosition = this.state.adjustedScrollPosition;

    var mainContainerMarginTop = (adjustedScrollPosition*(50/236)) - 40;
    if(this.state.adjustedInnerWidth < 960){
      mainContainerMarginTop = -230;
    }
    
    return (
      <div className="App">
        <Router>
          <ScrollToTop
            adjustedInnerWidth={this.state.adjustedInnerWidth}
            isScrolling={this.state.isScrolling}
            updateIsScrolling={(boolean) => {this.updateIsScrolling(boolean)}}
          />
            <Welcome
              adjustedScrollPosition={this.state.adjustedScrollPosition}
              adjustedInnerWidth={this.state.adjustedInnerWidth}
            />
            <NavBar
              adjustedScrollPosition={this.state.adjustedScrollPosition}
              adjustedInnerWidth={this.state.adjustedInnerWidth}
              updateCurrPage={(page) => {this.extUpdateCurrPage(page)}}
              currPage={this.state.currPage}
            />
            <header className="App-header">
              <div id="main-display-container"
                style={{
                  marginTop: `${mainContainerMarginTop}px`,
                  width: `100%`,
                }}
              >
                <Route
                  exact path="/"
                  render={(props) => <Projects {...props}
                  />}
                />
                <Route
                  path="/resume"
                  render={(props) => <Resume {...props}
                  />}
                />
                <Route
                  path="/contact"
                  render={(props) => <Contact {...props}
                  />}
                />
                <div className="main-display-scrolling-buffer" />
              </div>
            </header>
        </Router>
      </div>
    );
  }
}

export default App;
