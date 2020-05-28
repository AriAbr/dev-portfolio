import React, { Component } from 'react';

class Resume extends Component {
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
            Resume
          </h1>

          <div id="resume-pdf-div">
            <iframe className="pdf-iframe"
              src="/pdfjs-2.3.200-dist/web/viewer.html?file=%2FAri_Abramowitz_Resume.pdf"
              width='100%'
              height='auto'
              frameBorder="0"
              allowfullscreen
              webkitallowfullscreen
              externalLinkTarget="blank"
            ></iframe>
          </div>

        </div>
      </div>
    );
  }
}

export default Resume

/*


*/
