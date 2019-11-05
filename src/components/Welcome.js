import React, { Component } from 'react';
import NavBar from './NavBar';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isCondensed: false,
        scrollPosition: 0
    };
  }

  componentDidMount(){
    document.addEventListener("scroll", (e) => {
      var vertScrollPosition = window.pageYOffset;
      if(vertScrollPosition > 236){
        vertScrollPosition = 236;
      }
      this.setState({ scrollPosition: vertScrollPosition })
    })
  }


  render() {
    var welcomeMessageMarginTop = 54 - this.state.scrollPosition;
    if(welcomeMessageMarginTop < 0){
      welcomeMessageMarginTop = 0;
    }
    var welcomeMessageHeight = 300 - this.state.scrollPosition;
    var welcomeMessageLeftMargin = 480 - (1.7*this.state.scrollPosition);
    var welcomeMessageVertPadding = 27 - ((27/204)*this.state.scrollPosition);
    if(welcomeMessageVertPadding < 0){
      welcomeMessageVertPadding = 0;
    }
    var welcomeMessageOpacity = 1 - (this.state.scrollPosition/220);
    var condensedTitleOpacity = (this.state.scrollPosition/15) - (220/15);

    var headshotWidth = 400 - (this.state.scrollPosition*1.5)
    var welcomeContent = <></>
    if (!this.state.isCondensed) {
      welcomeContent = <div className="welcome-navbar-parent">
          <div id="main-header" style={{height: `${welcomeMessageHeight}px`}}>
            <div id="condensed-title"
              style={{
                opacity: `${condensedTitleOpacity}`,
              }}
            >
              Ari Abramowitz, Fullstack Web Developer
            </div>
            <img src="/headshot.jpg" alt="headshot" id="headshot"
              width={`${headshotWidth}px`}
              style={{
                borderWidth: `${10 - this.state.scrollPosition/30}px`,
                left: `${30 - this.state.scrollPosition/20}px`,
                top: `${25 - this.state.scrollPosition/20}px`,
                zIndex: "1",
              }}
            />
            <div id="main-header-message"
              style={{
                marginLeft: `${welcomeMessageLeftMargin}px`,
                marginRight: `0px`,
                marginTop: `0px`,
                marginBottom: `0px`,
                padding: `${welcomeMessageVertPadding}px 0px`,
                height: `${welcomeMessageHeight - welcomeMessageVertPadding*2}px`,
                opacity: `${welcomeMessageOpacity}`,
                zIndex: "0",
              }}
            >
              <div id="main-header-welcome">
                Hi, I'm <span id="welcome-name">Ari Abramowitz</span>
              </div>
              <div id="main-header-developer">
                I'm a fullstack web developer
              </div>
              <div id="main-header-please-scroll">
                Scroll down to see my projects, resume, and contact info
              </div>
            </div>
          </div>
        </div>
    } else if (this.state.isCondensed) {
      welcomeContent = <div className="welcome-navbar-parent">
          <div id="condensed-welcome-div" >CONDENSED WELCOME GOES HERE</div>
          <NavBar currPage='contact' top={this.state.scrollPosition}/>
        </div>
    }
    return (
        <div id="welcome-content">
          {welcomeContent}
        </div>
    )

  }
}

export default Welcome
