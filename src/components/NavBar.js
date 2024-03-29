import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      left: null,
      menuOpen: false,
    };
  }

  getLeft(){
    const headshot = document.getElementById("headshot");
    const headshotLeftNum = parseInt(headshot.style.left.slice(0,headshot.style.left.length-2));
    const headshotBorderWidthNum = parseInt(headshot.style.borderWidth.slice(0,headshot.style.borderWidth.length-2));
    var left = headshotLeftNum*2 + headshotBorderWidthNum*2 + headshot.offsetWidth;
    if(left < 85 ) {
      left = 85;
    }
    return left;
  }

  updateCurrPage(page){
    this.setState({
      menuOpen: false
    }, () => {
      this.props.updateCurrPage(page);
    })
  }

  handleMenuStateChange(state){
    this.setState({menuOpen: state.isOpen})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  componentDidMount(){
    var mainHeaderTop = document.getElementById("main-header").offsetHeight;

    this.setState({
      top: mainHeaderTop,
      left: this.getLeft(),
    });
  }

  componentDidUpdate(){
    var mainHeaderTop = document.getElementById("main-header").offsetHeight;

    if (mainHeaderTop !== this.state.top) {
      this.setState({
        top: mainHeaderTop,
      })
    }
    if (this.getLeft() !== this.state.left) {
      this.setState({
        left: this.getLeft(),
      })
    }
  }

  render() {
    var projectsCssClass = this.props.currPage === "Projects" ? "navbar-link navbar-link-current-page" : "navbar-link";
    var resumeCssClass = this.props.currPage === "Resume" ? "navbar-link navbar-link-current-page" : "navbar-link";
    var contactCssClass = this.props.currPage === "Contact" ? "navbar-link navbar-link-current-page" : "navbar-link";

    var currentNavBar = <></>

    if(this.props.adjustedInnerWidth >= 960) {
      currentNavBar = <div id="navbar-div"
                style={{
                  top: `${this.state.top - 48.5}px`,
                  right: `25px`,
                }}
              >
                  <Link to={`/`} className={resumeCssClass} onClick={() => { this.props.updateCurrPage("Resume") }}>Resume</Link>
                  <Link to={`/projects`} className={projectsCssClass} onClick={() => { this.props.updateCurrPage("Projects") }}>Projects</Link>
                  <Link to={`/contact`} className={contactCssClass} onClick={() => { this.props.updateCurrPage("Contact") }}>Contact</Link>
              </div>
    } else {
      currentNavBar = <Menu right isOpen={ this.state.menuOpen } onStateChange={(state) => this.handleMenuStateChange(state)}
                burgerButtonClassName={ "bm-burger-button" }
                burgerBarClassName={ "bm-burger-bars" }
                crossButtonClassName={ "bm-cross-button" }
                crossClassName={ "bm-cross" }
                menuClassName={ "bm-menu" }
                morphShapeClassName={ "bm-morph-shape" }
                itemListClassName={ "bm-item-list" }
                overlayClassName={ ".bm-overlay" }
              >
                <Link to={`/`} className="bm-item" onClick={() => { this.updateCurrPage("Resume") }}>Resume</Link>
                <Link to={`/projects`} className="bm-item" onClick={() => { this.updateCurrPage("Projects") }}>Projects</Link>
                <Link to={`/contact`} className="bm-item" onClick={() => { this.updateCurrPage("Contact") }}>Contact</Link>
              </Menu>
    }

    return (
      <div>
        {currentNavBar}
      </div>
    );
  }
}

export default NavBar
