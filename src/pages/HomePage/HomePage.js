import React, { Component } from "react";

import photo from "../../images/cutmypic.png";

import HomeNav from "./components/HomeNav";
import styles from "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <main className={styles.HomePage}>
        <HomeNav />
        <section className={styles.container}>
          <img src={photo} className={styles.photo} />
          <h2 className={styles.header}>Denis Krasnov</h2>
          <p className={styles.introduction}>
            Welcome to my portfolio. My name is Denis Krasnov. Born in Moldova,
            currently reside in the Netherlands. Ambitious and passionate about
            development. I like working in a agile, highly motivated team. I
            have started studying web technologies in February 2016. Have solid
            knowledge of ReactJs, always open to learn new technologies.
            Currently continue to advance my knowledge and skills. At the moment
            I live in Hoofddorp (Amsterdam area).
          </p>
        </section>
      </main>
    );
  }
}

export default HomePage;
