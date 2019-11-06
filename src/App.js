import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/welcome.css';
import './css/main-display.css';
import './css/resume.css';
import './css/projects.css';
import './css/contact.css';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adjustedScrollPosition: 0,
      realScrollPosition: 0,
    };
  }

  componentDidMount(){
    document.addEventListener("scroll", (e) => {
      var realScrollPosition = window.pageYOffset;
      var adjustedScrollPosition = realScrollPosition > 236 ? 236 : realScrollPosition;
      this.setState({
        adjustedScrollPosition: adjustedScrollPosition,
      })
    })
  }

  render() {
    const adjustedScrollPosition = this.state.adjustedScrollPosition;

    const mainMarginLeft = 470 - ((400/236)*adjustedScrollPosition);

    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <Router>
          <Welcome adjustedScrollPosition={this.state.adjustedScrollPosition} />
          <NavBar adjustedScrollPosition={this.state.adjustedScrollPosition} />
          <header className="App-header">
            <div id="main-display-container"
              style={{
                marginLeft: `${mainMarginLeft}px`,
                marginTop: `65px`,
                width: `calc(100% - ${mainMarginLeft}px)`
              }}
            >
              <Route exact path="/" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <div className="main-display-scrolling-buffer" />
            </div>
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
