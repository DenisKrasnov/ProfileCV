import React from "react";
import cn from "classnames";

import { skillParams } from "../../utilities/coordinates";

import styles from "./Skills.css";

const Skills = () => {
  const classNameSkill = cn(styles.skill, styles.active);
  return (
    <>
      <div className={styles.legend}>
        <div className={classNameSkill}>Experience</div>
        <div className={styles.skill}>Without experience</div>
      </div>
      {skillParams.map((coord, index) => {
        return (
          <div
            key={index}
            className={styles.box}
            style={{
              top: coord.top,
              left: coord.left,
            }}
          >
            {coord.names.map((obj, index) => (
              <div
                key={index}
                className={obj.active ? classNameSkill : styles.skill}
              >
                {obj.name}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Skills;
