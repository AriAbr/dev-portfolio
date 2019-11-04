import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div id="projects-div" className="main-display">
        <div className="main-display-content">


          <div className="text-first-project project-display">
            <div className="project-info">
              <h2 className="project-title">Spotifake</h2>
              <p className="project-description">Spotifake description wiil go here. In this unit, we saw Batsheva approach David as he neared the end of his life in order to inform him that his son, Adoniyahu, was already acting as if he were the king. In pasuk 21, Batsheva warns.</p>
              <div className="project-links">
                <a target="_blank" rel="noopener noreferrer" href="http://ariabr-spotifake.herokuapp.com/" className="project-link">
                  Spotifake  <i className="material-icons">open_in_new</i>
                </a>
                <div className="project-link-buffer" />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/Spotifake" className="project-link">
                  GitHub  <i className="material-icons">open_in_new</i>
                </a>
              </div>
            </div>
            <img src="/spotifake-screenshot.png" alt="spotifake-screenshot" id="spotifake-screenshot" className="project-preview" width="600px"/>
          </div>

          <hr className="project-break"/>

          <div className="picture-first-project project-display">
            <img src="/slaq-screenshot.png" alt="spotifake-screenshot" id="spotifake-screenshot" className="project-preview" width="600px"/>
            <div className="project-info">
              <h2 className="project-title">Slaq</h2>
              <p className="project-description">Slaq description wiil go here. In this unit, we saw Batsheva approach David as he neared the end of his life in order to inform him that his son, Adoniyahu, was already acting as if he were the king. In pasuk 21, Batsheva warns.</p>
              <div className="project-links">
                <a target="_blank" rel="noopener noreferrer" href="http://ariabr-slaq.herokuapp.com/" className="project-link">
                  Slaq  <i className="material-icons">open_in_new</i>
                </a>
                <div className="project-link-buffer" />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/Slaq" className="project-link">
                  GitHub  <i className="material-icons">open_in_new</i>
                </a>
              </div>
            </div>
          </div>

          <hr className="project-break"/>

          <div className="text-first-project project-display">
            <div className="project-info">
              <h2 className="project-title">Tirred</h2>
              <p className="project-description">Tirred description wiil go here. In this unit, we saw Batsheva approach David as he neared the end of his life in order to inform him that his son, Adoniyahu, was already acting as if he were the king. In pasuk 21, Batsheva warns.</p>
              <div className="project-links">
                <a target="_blank" rel="noopener noreferrer" href="http://tirred.herokuapp.com/" className="project-link">
                  Tirred  <i className="material-icons">open_in_new</i>
                </a>
                <div className="project-link-buffer" />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/tirred" className="project-link">
                  GitHub  <i className="material-icons">open_in_new</i>
                </a>
              </div>
            </div>
            <img src="/tirred-screenshot.png" alt="spotifake-screenshot" id="spotifake-screenshot" className="project-preview" width="600px"/>
          </div>


        </div>
      </div>
    );
  }
}

export default Projects
