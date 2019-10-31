import React, { useState, useEffect } from 'react';
import { backgroundContainerStyle, fadeAnimation, fallAnimation, foregroundContainerStyle, logoStyle, swayAnimation } from './styles';

const animations = `${fadeAnimation} ${fallAnimation} ${swayAnimation}`;
const styleSheet = document.styleSheet[0];
styleSheet.insertRule(animations, styleSheet.cssRules.length);





const Alert = props => {
  return (
    <div style={backgroundContainerStyle}>
      <div style={foregroundContainerStyle}></div>
      <span>
        {props.alert}
      </span>
      <div id="droplet-container"></div>
      {props.logo ? (
          <img
              style={logoStyle}
              src={props.logo}
          />
      ) : null}
  </div>)
}

export default Alert;