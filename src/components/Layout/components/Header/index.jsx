import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SocialLinks from "./components/social-links/";
import "./styles.css";

const propTypes = {
  appname: PropTypes.string,
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func
};

class Header extends Component {
  render() {
    const { appname, menuOpen, toggleMenu } = this.props;

    return (
      <header className="App-header">
        <div
          class={`nav-icon ${menuOpen ? "open" : ""}`}
          onClick={() => toggleMenu()}
        >
          <div />
        </div>
        <h1 className="App-title">
          <Link to="/">{appname}</Link>
        </h1>
        <SocialLinks />
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
