import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

const propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

class Menu extends Component {
  render() {
    const { isOpen, toggleMenu } = this.props;
    return (
      <Fragment>
        <div
          className={`menu-bg ${isOpen ? "opened" : ""}`}
          onClick={() => toggleMenu()}
        />
        <div className={`menu ${isOpen ? "opened" : ""}`}>
          <div className="menu-container menu-list">
            <NavLink
              to="/"
              activeClassName="is-active"
              exact
              onClick={() => toggleMenu()}
            >
              Home
            </NavLink>
            <NavLink
              to="/section"
              activeClassName="is-active"
              onClick={() => toggleMenu()}
            >
              Section
            </NavLink>
            <NavLink
              to="/counter"
              activeClassName="is-active"
              onClick={() => toggleMenu()}
            >
              Redux counter
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="is-active"
              onClick={() => toggleMenu()}
            >
              About
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}

Menu.propTypes = propTypes;

export default Menu;
