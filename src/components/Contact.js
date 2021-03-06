import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      isvalidEmailAddress: null,
      emailBody: "",
      senderName: "",
      emailStatus: "writing",
      emailOverlayMessage: "Sending...",
    };
  }

  updateSenderName(e){
    this.setState({ senderName: e.target.value});
  }

  updateEmailAddress(e){
    var validator = require("email-validator");
    this.setState({
      emailAddress: e.target.value,
      isvalidEmailAddress: validator.validate(e.target.value),
    });
  }

  updateEmailBody(e){
    this.setState({ emailBody: e.target.value});
  }

  submitEmail(e){
    e.preventDefault();

    var validator = require("email-validator");
    if(validator.validate(this.state.emailAddress)){
      this.setState({
        emailStatus: "sending",
        emailOverlayMessage: "Sending..."
      });
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
      var emailData = {
        message_html: this.state.emailBody,
        to_name: "Ari",
        from_name: this.state.senderName,
        reply_to: this.state.emailAddress
      }
      this.sendFeedback(templateId, emailData)
    } else {
      this.setState({
        emailStatus: "invalidAddress",
        emailOverlayMessage: <>
                              Sorry, that's not a valid email address.
                              <button onClick={(e) => this.tryAgain(e)} className="email-refresh" style={{marginTop: "16px", width: "250px"}}>Try again</button>
                            </>,
      });
    }
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send('gmail', templateId,variables).then(res => {
        setTimeout(() => {
          this.setState({
            emailStatus: "sent",
            emailOverlayMessage: <>
                                  Sent!
                                  <button onClick={(e) => this.startNewEmail(e)} className="email-refresh" style={{marginTop: "16px", width: "250px"}}>Start new email</button>
                                </>,
          });
        }, 1500);
      })
     // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        setTimeout(() => {
          this.setState({
            emailStatus: "failed",
            emailOverlayMessage: <>
                                  Sorry, that didn't go through.
                                  <button onClick={(e) => this.tryAgain(e)} className="email-refresh" style={{marginTop: "16px", width: "250px"}}>Try again</button>
                                </>,
          });
        }, 1500);
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
      })
  }

  startNewEmail(e){
    e.preventDefault();
    this.setState({
      emailAddress: "",
      emailBody: "",
      senderName: "",
      emailStatus: "writing"
    })
  }

  tryAgain(e){
    e.preventDefault();
    this.setState({
      emailStatus: "writing"
    })
  }

  render() {
    var emailInputClass = "";
    if(this.state.isvalidEmailAddress === true) {
      emailInputClass = "valid-email-input";
    } else if (this.state.isvalidEmailAddress === false) {
      emailInputClass = "invalid-email-input";
    }

    return (
      <div id="contact-div" className="main-display">

        <div className="main-display-content">
          <h1 className="page-header">
            Contact
          </h1>

          <LoadingOverlay
            active={["sending", "sent", "failed", "invalidAddress"].includes(this.state.emailStatus) }
            spinner={["sending"].includes(this.state.emailStatus)}
            text={this.state.emailOverlayMessage}
            className="email-overlay"
          >
            <hr className="break-before-content" />

          <form onSubmit={(e) => {this.submitEmail(e)}} id="contact-form">

            <div autocomplete="new-name" id="contact-name-div" className="name-email-div">
              <label for="senderName" className="contact-input-label">Name</label>
              <input
                type="text"
                value={this.state.senderName}
                name="senderName"
                id="senderName"
                className="contact-input name-email-input"
                onChange={(e) => {this.updateSenderName(e)}}
              />
            </div>
            <div id="contact-email-div" className="name-email-div">
              <label for="emailAddress" className="contact-input-label">Email Address</label>
              <input
                type="text"
                value={this.state.emailAddress}
                name="emailAddress"
                id="emailAddress"
                className={`contact-input name-email-input ${emailInputClass}`}
                onChange={(e) => {this.updateEmailAddress(e)}}
              />
            </div>
            <div id="contact-message-div">
              <label for="emailBody" className="contact-input-label message-input-label" >Message</label>
                <textarea
                  rows="8" cols="50"
                  type="text"
                  value={this.state.emailBody}
                  name="emailBody"
                  id="emailBody"
                  className="contact-input message-input"
                  onChange={(e) => {this.updateEmailBody(e)}}
                />

            </div>
            <button type="submit" onClick={(e) => this.submitEmail(e)} className="email-submit" style={{marginTop: "16px", width: "250px"}}>
              Send
            </button>
          </form>
          <div className="sending-overlay-buffer" />
          </LoadingOverlay>


        </div>
      </div>
    );
  }
}

export default Contact
