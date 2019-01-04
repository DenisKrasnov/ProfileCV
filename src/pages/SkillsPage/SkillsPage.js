import React, { Component } from "react";

import { svgCoordinates, headersCoord } from "../../utilities/coordinates";

import Arrows from "./Arrows";
import Skills from "./Skills";
import Header from "./Header";

import styles from "./SkillsPage.css";

class SkillsPage extends Component {
  renderCircles = () => {
    return svgCoordinates.circles.map((obj, index) => (
      <circle
        key={index}
        cx={obj.cx}
        cy={obj.cy}
        r={obj.r}
        strokeWidth="3"
        className={styles.circle}
        fill="none"
      />
    ));
  };

  renderLines = () => {
    const linesCoord = svgCoordinates.lines;
    return Object.keys(linesCoord).map((key, index) => (
      <path
        key={index}
        id={key}
        className={styles.svgLine}
        d={`M${linesCoord[key].startX} ${linesCoord[key].startY} Q${
          linesCoord[key].pX
        }
        ${linesCoord[key].pY}
        ${linesCoord[key].endX}
        ${linesCoord[key].endY}`}
        stroke="blue"
        strokeWidth="4"
        fill="none"
      />
    ));
  };

  renderCurves = () => {
    const curvesCoord = svgCoordinates.curves;
    return Object.keys(curvesCoord).map((key, index) => (
      <path
        key={index}
        id={key}
        className={styles.svgLine}
        d={`M${curvesCoord[key].startX} ${curvesCoord[key].startY} Q${
          curvesCoord[key].pX
        }
        ${curvesCoord[key].pY}
        ${curvesCoord[key].p2X}
        ${curvesCoord[key].p2Y} T${curvesCoord[key].endX}
        ${curvesCoord[key].endY}`}
        stroke="blue"
        strokeWidth="4"
        fill="none"
      />
    ));
  };

  renderText = () => {
    return headersCoord.map((obj, index) => (
      <text
        key={index}
        className={styles.headers}
        x={obj.left}
        y={obj.top}
        fontSize={obj.fsize}
      >
        {obj.name}
      </text>
    ));
  };

  render() {
    return (
      <main className={styles.SkillsPage}>
        <Header />
        <Arrows />
        <div className={styles.skillsWrapper}>
          <Skills />
          <svg width="1050" height="1400">
            {this.renderCircles()}
            {this.renderCurves()}
            {this.renderLines()}
            {this.renderText()}
          </svg>
        </div>
      </main>
    );
  }
}

export default SkillsPage;
