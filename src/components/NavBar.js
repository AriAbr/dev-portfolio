import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: "projects",
    };
  }

  updateCurrPage(page){
    if(page !== this.state.currPage){
      this.setState({ currPage: page });
    }
  }

  render() {
    const adjustedScrollPosition = this.props.adjustedScrollPosition;

    var top = 306 - adjustedScrollPosition;
    var left = 480 - ((400/236)*adjustedScrollPosition);
    var widthOffSet = 500 - ((400/236)*adjustedScrollPosition);

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
          <Link to={`/`} className={projectsCssClass} onClick={() => {this.updateCurrPage("projects")}}>Projects</Link>
          <Link to={`/resume`} className={resumeCssClass} onClick={() => {this.updateCurrPage("resume")}}>Resume</Link>
          <Link to={`/contact`} className={contactCssClass} onClick={() => {this.updateCurrPage("contact")}}>Contact</Link>
      </div>
    );
  }
}

export default NavBar
