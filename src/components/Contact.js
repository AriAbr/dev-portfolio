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
      <div id="contact-div" className="main-display">
        <NavBar currPage='contact' />
        <div className="main-display-content">
          <p id="contact-placeholder">CONTACT WILL GO HERE</p>
        </div>
      </div>
    );
  }
}

export default Projects
