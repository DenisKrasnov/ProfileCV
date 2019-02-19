import React from "react";

import { routes } from "../../../routes";

import NavLink from "./NavLink";
import styles from "./HomeNav.css";

const HomeNav = () => {
  return (
    <nav className={styles.HomeNav}>
      <div className={styles.wrapper}>
        {routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.to}
              Icon={route.Icon}
              routeName={route.name}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default HomeNav;
