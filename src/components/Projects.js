import React, { Component } from 'react';
import NavBar from './NavBar';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div id="projects-div" className="main-display">
        <NavBar currPage='projects' />
        <div className="main-display-content">
          <p id="projects-placeholder">PROJECTS WILL GO HERE</p>
        </div>
      </div>
    );
  }
}

export default Projects
