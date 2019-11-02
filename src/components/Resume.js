import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import resumePdf from './../resume.pdf';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoadSuccess (document) {
    const { numPages } = document;
    this.setState({
      numPages,
    });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div id="resume-div" className="main-display">
        <div className="main-display-content">
          <p id="resume-placeholder"> </p>
          <div id="resume-pdf-div">
          <Document
            file={resumePdf}
            onLoadSuccess={(resumePdf) => {this.onDocumentLoadSuccess(resumePdf)}}
            className="resume-pdf"
          >
            <Page pageNumber={pageNumber} id="resume-pdf-page" width="1000"/>
          </Document>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume
