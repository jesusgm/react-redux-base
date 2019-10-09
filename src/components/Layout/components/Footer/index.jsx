import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const propTypes = {
  prop: PropTypes.string
};

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">&copy; 2019 Jesús Gándara Martínez</footer>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;
