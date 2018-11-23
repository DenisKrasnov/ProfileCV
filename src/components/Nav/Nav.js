import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cv-viewer">CV-viewer</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
