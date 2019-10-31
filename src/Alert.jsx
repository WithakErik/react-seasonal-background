import React, { useState, useEffect } from 'react';
import {
  backgroundContainerStyle,
  fadeAnimation,
  fallAnimation,
  foregroundContainerStyle,
  logoStyle,
  swayAnimation
} from './styles';

/*  imports animations  */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(swayAnimation, styleSheet.cssRules.length);

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