import React, { Component } from "react";

import photo from "../../images/denis.jpg";

import styles from "./Home.css";

class Home extends Component {
  render() {
    return (
      <main>
        <section className={styles.container}>
          <img src={photo} />
          <h2>Denis Krasnov</h2>
        </section>
      </main>
    );
  }
}

export default Home;
