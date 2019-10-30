import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const currPage = this.props.currPage;
    var projectsCssClass = this.props.currPage === 'projects' ? "navbar-link navbar-link-current-page" : "navbar-link";
    var resumeCssClass = this.props.currPage === 'resume' ? "navbar-link navbar-link-current-page" : "navbar-link";
    var contactCssClass = this.props.currPage === 'contact' ? "navbar-link navbar-link-current-page" : "navbar-link";

    return (
      <div id="navbar-div">
        <Link to={`/`} activeClassName="active" className={projectsCssClass}>Projects</Link>
        <Link to={`/resume`} activeClassName="active" className={resumeCssClass}>Resume</Link>
        <Link to={`/contact`} activeClassName="active" className={contactCssClass}>Contact</Link>
      </div>
    );
  }
}

export default Projects
