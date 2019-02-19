import React, { Component } from "react";
import { Link } from "react-router-dom";
import { string, element } from "prop-types";

import styles from "./NavLink.css";

class NavLink extends Component {
  static propTypes = {
    to: string.isRequired,
    routeName: string.isRequired,
    Icon: element.isRequired,
  };

  state = {
    isHovered: false,
  };

  onMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { to, routeName, Icon } = this.props;
    const { isHovered } = this.state;

    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <Link to={to} className={styles.link}>
          {isHovered ? (
            <div className={styles.linkNameWrapper}>
              <span className={styles.linkName}>{routeName}</span>
            </div>
          ) : (
            <span className={styles.icon}>{Icon}</span>
          )}
        </Link>
      </div>
    );
  }
}

export default NavLink;
