import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/welcome.css';
import './css/main-display.css';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Welcome />
          <NavBar />
          <header className="App-header">
            <Route exact path="/" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
