import React, { Component } from "react";

import photo from "../../images/photo.jpg";

import styles from "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <main>
        <section className={styles.container}>
          <img src={photo} className={styles.photo} />
          <h2>Denis Krasnov</h2>
        </section>
      </main>
    );
  }
}

export default HomePage;
