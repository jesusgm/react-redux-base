import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

const propTypes = {
  routes: PropTypes.array,
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

class Menu extends Component {
  render() {
    const { routes, isOpen, toggleMenu } = this.props;
    return (
      <Fragment>
        <div
          className={`menu-bg ${isOpen ? "opened" : ""}`}
          onClick={() => toggleMenu()}
        />
        <div className={`menu ${isOpen ? "opened" : ""}`}>
          <div className="menu-container menu-list">
            {routes.length > 0
              ? routes.map(route => (
                  <NavLink
                    to={route.path}
                    activeClassName="is-active"
                    exact
                    onClick={() => toggleMenu()}
                  >
                    {route.name}
                  </NavLink>
                ))
              : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

Menu.propTypes = propTypes;

export default Menu;
