import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 236,
      realScrollPosition: 0,
      currPage: "projects",
    };
  }

  updateCurrPage(page){
    if(page !== this.state.currPage){
      this.setState({ currPage: page });
    }
  }

  componentDidMount(){
    console.log('navbar mounted')
    document.addEventListener("scroll", (e) => {
      console.log(window.pageYOffset);
      var vertScrollPosition = window.pageYOffset;

      if(vertScrollPosition < 236){
        vertScrollPosition = 236;
      }
      this.setState({ scrollPosition: vertScrollPosition, realScrollPosition: window.pageYOffset });
    })
  }
  render() {
    const scrollPosition = this.state.scrollPosition
    const top = scrollPosition + 70;
    var left = 480 - ((400/236)*this.state.realScrollPosition);
    if (left < 80) {
      left = 80;
    }
    var widthOffSet = 500 - ((400/236)*this.state.realScrollPosition);
    if (widthOffSet < 100) {
      widthOffSet = 100;
    }
    var projectsCssClass = this.state.currPage === 'projects' ? "navbar-link navbar-link-current-page" : "navbar-link";
    var resumeCssClass = this.state.currPage === 'resume' ? "navbar-link navbar-link-current-page" : "navbar-link";
    var contactCssClass = this.state.currPage === 'contact' ? "navbar-link navbar-link-current-page" : "navbar-link";

    return (
      <div id="navbar-div"
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width:`calc(100% - ${widthOffSet}px)`
        }}
      >
          <Link to={`/`} activeClassName="active" className={projectsCssClass} onClick={() => {this.updateCurrPage("projects")}}>Projects</Link>
          <Link to={`/resume`} activeClassName="active" className={resumeCssClass} onClick={() => {this.updateCurrPage("resume")}}>Resume</Link>
          <Link to={`/contact`} activeClassName="active" className={contactCssClass} onClick={() => {this.updateCurrPage("contact")}}>Contact</Link>
      </div>
    );
  }
}

export default NavBar
