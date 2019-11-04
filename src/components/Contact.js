import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      emailBody: "",
      senderName: "",
    };
  }

  updateSenderName(e){
    this.setState({ senderName: e.target.value});
  }

  updateEmailAddress(e){
    this.setState({ emailAddress: e.target.value});
  }

  updateEmailBody(e){
    this.setState({ emailBody: e.target.value});
  }

  submitEmail(e){
    e.preventDefault();
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    this.sendFeedback(templateId, {
      message_html: this.state.emailBody,
      from_name: this.state.name,
      reply_to: this.state.emailAddress
    })
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        window.alert('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
        window.alert('Email not sent. Please try again.');
      })
  }

  render() {

    return (
      <div id="contact-div" className="main-display">
        <div className="main-display-content">
          <p id="contact-placeholder">CONTACT WILL GO HERE</p>

          <form onSubmit={(e) => {this.submitEmail(e)}} style={{width: "85%", margin: "auto"}}>
            Name:
            <input
              type="text"
              value={this.state.senderName}
              name="senderName"
              onChange={(e) => {this.updateSenderName(e)}}
            />
            Email:
            <input
              type="text"
              value={this.state.emailAddress}
              name="emailAddress"
              onChange={(e) => {this.updateEmailAddress(e)}}
            />
            Message:
            <input
              type="text"
              value={this.state.emailBody}
              name="emailBody"
              onChange={(e) => {this.updateEmailBody(e)}}
            />
            <div className="col-lg-12 text-center">
              <button type="submit" onClick={(e) => this.submitEmail(e)} className="email-submit" style={{marginTop: "16px", width: "250px"}}>Submit</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default Contact
