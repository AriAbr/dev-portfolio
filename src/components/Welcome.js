import React, { Component } from 'react';
import NavBar from './NavBar';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isCondensed: false,
        scrollPosition: 0,
        headshotWidth: null,
        headshotBorderWidth: null,
        headshotLeft: null,
        mainHeaderMessageTotalHeight: null,
    };
  }

  getHeadshotData(){
    var headshotElem = document.getElementById("headshot");
    var headshotBorderWidth = headshotElem.style.borderWidth;
    var headshotBorderWidthNum = parseInt(headshotBorderWidth.slice(0,headshotBorderWidth.length-2));
    var headshotLeft = headshotElem.style.left;
    var headshotLeftNum = parseInt(headshotLeft.slice(0,headshotLeft.length-2));

    var headshotData = {};
    headshotData.left = headshotLeftNum;
    headshotData.borderWidth = headshotBorderWidthNum;
    headshotData.width = headshotElem.width;
    return headshotData;
  }

  getMainHeaderMessageTotalHeight(){
    var mainHeaderMessageElem = document.getElementById("main-header-message");
    var mainHeaderMessageHeight = mainHeaderMessageElem.offsetHeight;
    var mainHeaderMessageVertPadding = mainHeaderMessageElem.style.paddingTop;
    var mainHeaderMessageVertPaddingNum = parseInt(mainHeaderMessageVertPadding.slice(0,mainHeaderMessageVertPadding.length-2));
    var mainHeaderMessageTotalHeight = mainHeaderMessageHeight + mainHeaderMessageVertPaddingNum*2;

    return mainHeaderMessageTotalHeight;
  }

  componentDidMount(){
    const headshotData = this.getHeadshotData()
    const mainHeaderMessageTotalHeight = this.getMainHeaderMessageTotalHeight()

    this.setState({
      headshotWidth: headshotData.width,
      headshotBorderWidth: headshotData.borderWidth,
      headshotLeft: headshotData.left,
      mainHeaderMessageTotalHeight: mainHeaderMessageTotalHeight,
    })
  }

  componentDidUpdate(){
    const headshotData = this.getHeadshotData()
    const mainHeaderMessageTotalHeight = this.getMainHeaderMessageTotalHeight()

    if(headshotData.width !== this.state.headshotWidth){
      this.setState({ headshotWidth: headshotData.width })
    }
    if(headshotData.borderWidth !== this.state.headshotBorderWidth){
      this.setState({ headshotBorderWidth: headshotData.borderWidth })
    }
    if(headshotData.left !== this.state.headshotLeft){
      this.setState({ headshotLeft: headshotData.left })
    }
    if(mainHeaderMessageTotalHeight !== this.state.mainHeaderMessageTotalHeight){
      this.setState({ mainHeaderMessageTotalHeight: mainHeaderMessageTotalHeight })
    }
  }

  render() {
    const adjustedScrollPosition = this.props.adjustedScrollPosition;

    var welcomeMessageLeftMargin = this.state.headshotLeft*2 + this.state.headshotBorderWidth*2 + this.state.headshotWidth;

    var welcomeMessageVertPadding = 27 - ((27/204)*adjustedScrollPosition);
    var welcomeMessageOpacity = 1 - (adjustedScrollPosition/220);

    var condensedTitleOpacity = (adjustedScrollPosition/26) - (210/26);

    var headshotWidth = 250 - (adjustedScrollPosition*(200/236));
    var headshotLeft = 30 - (adjustedScrollPosition*(12/236));
    var headshotTop = headshotLeft;
    var headshotBorderWidth = 10 - (adjustedScrollPosition*(8/236));
    var mainHeaderHeight = 250 - (adjustedScrollPosition*(190/236));

    var welcomeContent = <></>
    if (!this.state.isCondensed) {
      welcomeContent = <div className="welcome-navbar-parent">
        <img src="/headshot.jpg" alt="headshot" id="headshot"
          style={{
            borderWidth: `${headshotBorderWidth}px`,
            left: `${headshotLeft}px`,
            top: `${headshotTop}px`,
            width: `${headshotWidth}px`,
            zIndex: "1",
          }}
        />
          <div
            id="main-header"
            style={{
              height: `${mainHeaderHeight}px`,
            }}
          >
            <div id="condensed-title"
              style={{
                opacity: `${condensedTitleOpacity}`,
              }}
            >
              Ari Abramowitz, Fullstack Web Developer
            </div>

            <div id="main-header-message"
              style={{
                marginLeft: `${welcomeMessageLeftMargin}px`,
                marginRight: `0px`,
                marginTop: `0px`,
                marginBottom: `0px`,
                padding: `${welcomeMessageVertPadding}px 0px`,
                height: `fit-contents`,
                opacity: `${welcomeMessageOpacity}`,
                zIndex: "0",
              }}
            >
              <div
                id="main-header-welcome"

              >
                Hi, I'm <span id="welcome-name">Ari Abramowitz</span>
              </div>
              <div
                id="main-header-developer"
              >
                I'm a fullstack web developer
              </div>
              <div
                id="main-header-please-scroll"
              >
                Scroll down to see my projects, resume, and contact info
              </div>
            </div>
          </div>
        </div>
    } else if (this.state.isCondensed) {
      welcomeContent = <div className="welcome-navbar-parent">
          <div id="condensed-welcome-div" >CONDENSED WELCOME GOES HERE</div>
          <NavBar currPage='contact' top={adjustedScrollPosition}/>
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
