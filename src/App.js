import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import headshot from './logo.svg';
import './css/App.css';
import './css/welcome.css';
import './css/main-display.css';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Welcome from './components/Welcome';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="App">
        <Welcome />
        <header className="App-header">
          <Router>
            <Route exact path="/" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
