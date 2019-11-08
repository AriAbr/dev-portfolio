import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: null,
      top: null,
      left: null,
    };
  }

  updateCurrPage(page){
    if(page !== this.state.currPage){
      this.setState({ currPage: page });
    }
  }

  getLeft(){
    const headshot = document.getElementById("headshot");
    const headshotLeftNum = parseInt(headshot.style.left.slice(0,headshot.style.left.length-2));
    const headshotBorderWidthNum = parseInt(headshot.style.borderWidth.slice(0,headshot.style.borderWidth.length-2));
    var left = headshotLeftNum*2 + headshotBorderWidthNum*2 + headshot.offsetWidth;
    if(left < 85 ) {
      left = 85;
    }
    return left;
  }

  componentDidMount(){
    var currentURL = window.location.href;
    var currPage = currentURL.split("/")[3] || "";
    var mainHeaderTop = document.getElementById("main-header").offsetHeight;

    this.setState({
      currPage: currPage,
      top: mainHeaderTop,
      left: this.getLeft(),
    });
  }

  componentDidUpdate(){
    var mainHeaderTop = document.getElementById("main-header").offsetHeight;

    if (mainHeaderTop !== this.state.top) {
      this.setState({
        top: mainHeaderTop,
      })
    }
    if (this.getLeft() !== this.state.left) {
      this.setState({
        left: this.getLeft(),
      })
    }
  }

  render() {
    const adjustedScrollPosition = this.props.adjustedScrollPosition;

    var widthOffSet = 360 - ((235/236)*adjustedScrollPosition);

    var projectsCssClass = this.state.currPage === "" ? "navbar-link navbar-link-current-page" : "navbar-link";
    var resumeCssClass = this.state.currPage === "resume" ? "navbar-link navbar-link-current-page" : "navbar-link";
    var contactCssClass = this.state.currPage === "contact" ? "navbar-link navbar-link-current-page" : "navbar-link";

    return (
      <div id="navbar-div"
        style={{
          top: `${this.state.top - 50}px`,
          right: `25px`,
        }}
      >
          <Link to={`/`} className={projectsCssClass} onClick={() => {this.updateCurrPage("")}}>Projects</Link>
          <Link to={`/resume`} className={resumeCssClass} onClick={() => {this.updateCurrPage("resume")}}>Resume</Link>
          <Link to={`/contact`} className={contactCssClass} onClick={() => {this.updateCurrPage("contact")}}>Contact</Link>
      </div>
    );
  }
}

export default NavBar
