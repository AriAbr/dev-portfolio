import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/welcome.css';
import './css/main-display.css';
import './css/resume.css';
import './css/projects.css';
import './css/contact.css';
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
      mainMarginLeft: null
    };
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

  componentDidMount(){
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

  componentDidUpdate(){
    if(this.getMainMarginLeft() !== this.state.mainMarginLeft){
      this.setState({
        mainMarginLeft: this.getMainMarginLeft(),
      })
    }
  }

  render() {
    const adjustedScrollPosition = this.state.adjustedScrollPosition;

    const mainContainerMarginTop = 20 + (adjustedScrollPosition*(55/236));
    const mainMarginLeft = this.state.mainMarginLeft;

    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <Router>
          <Welcome adjustedScrollPosition={this.state.adjustedScrollPosition} />
          <NavBar adjustedScrollPosition={this.state.adjustedScrollPosition} getMainMarginLeft={() => {this.getMainMarginLeft()}}/>
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
