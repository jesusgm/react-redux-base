import React, { Component } from "react";
import { Route } from "react-router";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Menu from "./components/Menu/";

/** Pages */
import Home from "../pages/Home";
import SectionContainer from "../pages/section/SectionContainer";
import Counter from "../pages/counter-redux/";

import "./styles.css";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <div className="layout-main">
        <Header
          appname="App Name"
          menuOpen={menuOpen}
          toggleMenu={() => this.setState({ menuOpen: !menuOpen })}
        />
        <Menu
          isOpen={menuOpen}
          toggleMenu={() => this.setState({ menuOpen: !menuOpen })}
        />
        <div className="main-content">
          <Route exact path="/" component={Home} />
          <Route path="/section" component={SectionContainer} />
          <Route path="/counter" component={Counter} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
