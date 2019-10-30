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
      <div id="resume-div" className="main-display">
        <NavBar currPage='resume' />
        <div className="main-display-content">
          <p id="resume-placeholder">RESUME WILL GO HERE</p>
        </div>
      </div>
    );
  }
}

export default Projects
