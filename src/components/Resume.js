import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

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

  downloadResume(){
    var FileSaver = require('file-saver');
    FileSaver.saveAs("/resume.pdf", "Ari_Abramowitz_resume.pdf");
  }

  render() {
    const { pageNumber } = this.state;



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

            <Document
              file="/resume.pdf"
              onLoadSuccess={(file) => {this.onDocumentLoadSuccess(file)}}
              className="resume-pdf"
            >
                <div id="resume-download-button-container">
                  <button onClick={() => {this.downloadResume()}} className="resume-download-button">
                    <i class="far fa-arrow-alt-circle-down"></i> Download 
                  </button>
                </div>
              <Page pageNumber={pageNumber} id="resume-pdf-page" width={1000}/>
            </Document>
          </div>

        </div>
      </div>
    );
  }
}

export default Resume

/*


*/
