import React from "react";
import cn from "classnames";

import { arrowsCoord } from "../../utilities/coordinates";

import styles from "./Arrows.css";

const Arrows = () => {
  return (
    <div className={styles.Arrows}>
      {arrowsCoord.map((coord, index) => {
        const classNameArrow = cn(styles[`arrow_${index + 1}`], styles.arrow);
        return (
          <div
            key={index}
            className={classNameArrow}
            style={{
              top: `${coord.top}px`,
              left: `${coord.left}px`,
            }}
          >
            {"\u25B2"}
          </div>
        );
      })}
    </div>
  );
};

export default Arrows;
