import React from "react";

import styles from "./Header.css";

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <h1>Skills</h1>
        <div className={styles.title}>On this page you can find my skills</div>
      </header>
      <hr />
    </>
  );
};

export default Header;
