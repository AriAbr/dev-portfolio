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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adjustedScrollPosition: 0,
      realScrollPosition: 0,
      mainHeaderHeight: null,
      mainMarginLeft: null,
      adjustedInnerWidth: null, //0, 960
      currPage: "Projects",
    };
  }

  extUpdateCurrPage(page){
    if(page !== this.state.currPage){
      this.setState({ currPage: page });
    }
  }

  getMainMarginLeft(){
    const headshot = document.getElementById("headshot");
    const headshotWidth = headshot.style.width;
    const headshotBorderWidth = headshot.style.borderWidth;
    const headshotLeft = headshot.style.left;
    const headshotWidthNum = parseInt(headshotWidth.slice(0,headshotWidth.length-2));
    const headshotBorderWidthNum = parseInt(headshotBorderWidth.slice(0,headshotBorderWidth.length-2));
    const headshotLeftNum = parseInt(headshotLeft.slice(0,headshotLeft.length-2));
    const mainMarginLeft = headshotLeftNum*2 + headshotBorderWidthNum*2 + headshotWidthNum;
    return mainMarginLeft;
  }

  setAdjustedInnerWidth(innerWidth){
    var adjustedInnerWidth = innerWidth;
    if (adjustedInnerWidth >= 960) {
      adjustedInnerWidth = 960;
    } else if (adjustedInnerWidth >= 625 && adjustedInnerWidth < 960) {
      adjustedInnerWidth = 625;
    } else {
      adjustedInnerWidth = 0;
    }
    if (adjustedInnerWidth !== this.state.adjustedInnerWidth){
      this.setState({ adjustedInnerWidth: adjustedInnerWidth });
    }
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

    this.setState({
      mainMarginLeft: this.getMainMarginLeft(),
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.getMainMarginLeft() !== this.state.mainMarginLeft){
      this.setState({
        mainMarginLeft: this.getMainMarginLeft(),
      })
    }
    if(prevState.currPage !== this.state.currPage){
      if(this.state.adjustedInnerWidth === 960){
        if(prevState.adjustedScrollPosition < 236){
          //leave the scroll position where it is
        } else if (prevState.adjustedScrollPosition === 236) {
          //go to the top of the page if past expanded header
          window.scrollTo(0, 0);
          window.scrollBy(0, 236);
        }
      } else if (this.state.adjustedInnerWidth < 960){
        //always go to top
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    const adjustedScrollPosition = this.state.adjustedScrollPosition;

    var mainContainerMarginTop = (adjustedScrollPosition*(50/236)) - 40;
    if(this.state.adjustedInnerWidth < 960){
      mainContainerMarginTop = -230;
    }
    const mainMarginLeft = this.state.mainMarginLeft;

    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <Router>
          <Welcome
            adjustedScrollPosition={this.state.adjustedScrollPosition}
            adjustedInnerWidth={this.state.adjustedInnerWidth}
          />
          <NavBar
            adjustedScrollPosition={this.state.adjustedScrollPosition}
            adjustedInnerWidth={this.state.adjustedInnerWidth}
            getMainMarginLeft={() => {this.getMainMarginLeft()}}
            updateCurrPage={(page) => {this.extUpdateCurrPage(page)}}
            currPage={this.state.currPage}
          />
          <header className="App-header">
            <div id="main-display-container"
              style={{
                marginLeft: `${mainMarginLeft}px`,
                marginTop: `${mainContainerMarginTop}px`,
                width: `100%`,
              }}
            >
              <Route exact path="/" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <div className="main-display-scrolling-buffer" />
            </div>
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
