import React, { Component } from "react";
import "./styles.css";

class SocialLinks extends Component {
  render() {
    return (
      <ul className="social-links">
        <li className="social-link">
          <a href="" target="_blank">
            <span className="fab fa-facebook-square" />
          </a>
        </li>
        <li className="social-link">
          <a href="" target="_blank">
            <span className="fab fa-twitter-square" />
          </a>
        </li>
        <li className="social-link">
          <a href="" target="_blank">
            <span className="fab fa-instagram" />
          </a>
        </li>
        <li className="social-link">
          <a href="" target="_blank">
            <span className="fab fa-github-square" />
          </a>
        </li>
      </ul>
    );
  }
}

export default SocialLinks;
