import React, { useState, useEffect } from 'react';
import {
  alertContainerStyle,
  backgroundContainerStyle,
  fadeAnimation,
  fallDropAnimation,
  fallSwayAnimation,
  foregroundContainerStyle,
  logoStyle,
  springDropAnimation,
  summerSwayAnimation,
  winterSwayAnimation,
} from './styles';

/*  imports animations  */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallDropAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallSwayAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(springDropAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(winterSwayAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(summerSwayAnimation, styleSheet.cssRules.length);

const getCurrentSeason = month => {
  month = 8;
  if(month === 11|| month < 2) {
    return { season: 'winter', dropletImage: 'snowflake'};
  }
  else if(month < 5) {
    return { season: 'spring', dropletImage: 'raindrop'};
  }
  else if(month < 8) {
    return { season: 'summer', dropletImage: 'feather'};
  }
  else {
    return { season: 'fall', dropletImage: 'leaf'};
  }
}
const generateAnimationDropping = season => {
  if(season === 'winter') {
    return `fall-drop ${Math.random() * 30 + 10}s ${Math.random() * 40 + 5}s ease-in forwards infinite`;
  }
  else if(season === 'spring') {
    return `spring-drop ${Math.random() * 5 + 2}s ${Math.random() * 40 + 5}s forwards linear infinite`
  }
  else if(season === 'summer') {
    return `fall-drop ${Math.random() * 30 + 10}s ${Math.random() * 40 + 5}s forwards infinite`;
  }
  else {
    return `fall-drop ${Math.random() * 30 + 10}s ${Math.random() * 40 + 5}s forwards infinite`;
  }
}
const generateAnimationSwaying = season => {
  if(season === 'winter') {
    return `winter-sway ${Math.random() * 15 + 5}s linear forwards infinite`;
  }
  else if(season === 'spring') {
    return `none`;
  }
  else if(season === 'summer') {
    return `summer-sway ${Math.random() * 5 + 5}s forwards linear infinite`;   
  }
  else {
    return `fall-sway ${Math.random() * 15 + 5}s alternate infinite ease-in-out`;
  }
}
const generateFilter = season => {
  if(season === 'winter') {
    return `brightness(${Math.random() * 1 + 1}) hue-rotate(${Math.random() * 90 - 45}deg)`;
  }
  else if(season === 'spring') {
    return `brightness(${Math.random() * .5 + .5}) hue-rotate(${Math.random() * 80 - 20}deg)`;
  }
  else if(season === 'summer') {
    return `brightness(${Math.random() * .5 + .5})`;
  }
  else {
    return `brightness(${Math.random() * .5 + .5}) hue-rotate(${Math.random() * 180 - 60}deg)`;
  }
}
const generateTransform = season => {
  if(season === 'winter') {
    return `rotateX(${Math.random() * 45}deg)`
  }
  else if(season === 'spring') {
    return `rotate(-33deg) translate(-50%, 0)`;
  }
  else if(season === 'summer') {

  }
  else {
    return `rotate(${Math.random() * 360}deg)`;
  }
}
const Alert = props => {

  /*  Create droplets  */
  let droplets = [];
  const currentSeason = getCurrentSeason(new Date().getMonth()).season;
  const currentDropletImage = getCurrentSeason(new Date().getMonth()).dropletImage;
  const multiplier = currentSeason === 'summer' ? 100 : 10
  for(let i = 0; i < (window.innerWidth / multiplier); i++) {
    const dropping = generateAnimationDropping(currentSeason);
    const swaying = generateAnimationSwaying(currentSeason);
    const filter = generateFilter(currentSeason);
    const transform = generateTransform(currentSeason);
    const dropletContainerStyle = {
      animation: `${dropping}, ${swaying}`,
      left: `${i / (window.innerWidth / multiplier) * 100}%`,
      top: `-${Math.random() * 50 + 50}%`,
      position: 'fixed',
      filter
    }
    const dropletStyle = {
      transform
    }
    droplets.push((
      <div style={dropletContainerStyle} key={`droplet-${i}`}>
        <div style={dropletStyle}>
          <img height="50px" width="auto" src={`src/images/${currentDropletImage}.png`} />
        </div>
      </div>
    ))
  }
  return (
    <div style={backgroundContainerStyle}>
      <div style={foregroundContainerStyle}></div>
      <span style={alertContainerStyle}>
        {props.alertContainer}
      </span>
      <div>
        {droplets}
      </div>
      {props.logo ? (
          <img
              style={logoStyle}
              src={props.logo}
          />
      ) : null}
  </div>)
}

export default Alert;

/*
  Fall    Leaves
  Winter  Snow
  Spring  Rain
  Summer  Flower Petals
*/