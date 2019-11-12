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

        <div className="main-display-content"
          style={{
            marginLeft: `${this.props.mainDisplayContentMarginLeft}px`
          }}
        >
          <h1 className="page-header">
            Projects
          </h1>

          <div id="projects-wrapper">
          <hr className="break-before-content" />

            <div className="project-display">
              <div className="project-info">
                <h2 className="project-title">Spotifake</h2>
                <img src="/spotifake-screenshot.png" alt="spotifake-screenshot" id="spotifake-screenshot" className="project-preview" width="600px"/>
                <p className="project-description">
                  Spotifake is a simple, lightweight music player built on <b>React.js</b>. It is a frontend-only site that can serve as a starting point for a more robust music streaming application.
                </p>
                <div className="project-links">
                  <a target="_blank" rel="noopener noreferrer" href="http://ariabr-spotifake.herokuapp.com/" className="project-link">
                    Spotifake
                  </a>
                  <div className="project-link-buffer" />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/Spotifake" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <hr className="project-break"/>

            <div className="project-display">
              <div className="project-info">
                <h2 className="project-title">Slaq</h2>
                <img src="/slaq-screenshot.png" alt="slaq-screenshot" id="slaq-screenshot" className="project-preview" width="600px"/>
                <p className="project-description">Slaq description wiil go here. In this unit, we saw Batsheva approach David as he neared the end of his life in order to inform him that his son, Adoniyahu, was already acting as if he were the king. In pasuk 21, Batsheva warns.</p>
                <div className="project-links">
                  <a target="_blank" rel="noopener noreferrer" href="http://ariabr-slaq.herokuapp.com/" className="project-link">
                    Slaq
                  </a>
                  <div className="project-link-buffer" />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/Slaq" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <hr className="project-break"/>

            <div className="text-first-project project-display">
              <div className="project-info">
                <h2 className="project-title">Tirred</h2>
                <img src="/tirred-screenshot.png" alt="tirred-screenshot" id="tirred-screenshot" className="project-preview" width="600px"/>
                <p className="project-description">Tirred is a Reddit-inspired, sleep-themed discussion board. In this unit, we saw Batsheva approach David as he neared the end of his life in order to inform him that his son, Adoniyahu, was already acting as if he were the king. In pasuk 21, Batsheva warns.</p>
                <div className="project-links">
                  <a target="_blank" rel="noopener noreferrer" href="http://tirred.herokuapp.com/" className="project-link">
                    Tirred
                  </a>
                  <div className="project-link-buffer" />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/tirred" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <hr className="project-break"/>

            <div className="text-first-project project-display">
              <div className="project-info">
                <h2 className="project-title">Portfolio</h2>
                <img src="/portfollio-screenshot.png" alt="portfolio-screenshot" id="portfolio-screenshot" className="project-preview" width="600px"/>
                <p className="project-description">I built this site myself using <b>React.js</b>. You can check out the code here:</p>
                <div className="project-links">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AriAbr/dev-portfolio" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Projects
