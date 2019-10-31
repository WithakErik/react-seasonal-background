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
  winterSwayAnimation,
} from './styles';

/*  imports animations  */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallDropAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallSwayAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallSwayAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(springDropAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(winterSwayAnimation, styleSheet.cssRules.length);

const getCurrentSeason = month => {
  if(month === 11 || month < 2) {
    return 'winter';
  }
  else if(month < 5) {
    return 'spring';
  }
  else if(month < 8) {
    return 'summer';
  }
  else {
    return 'fall';
  }
}
const generateAnimationDropping = season => {
  if(season === 'winter') {

  }
  else if(season === 'spring') {
    return `spring-drop ${Math.floor(Math.random() * 10) + 5}s ${Math.floor(Math.random() * 40) + 5}s ease-in forwards infinite`
  }
  else if(season === 'summer') {
    
  }
  else {
    return `spring-drop ${Math.floor(Math.random() * 10) + 3}s ${Math.floor(Math.random() * 40) + 5}s linear forwards infinite`
    return `fall-drop ${Math.floor(Math.random() * 30) + 30}s ${Math.floor(Math.random() * 40) + 5}s forwards infinite}`;
  }
}
const generateAnimationSwaying = season => {
  if(season === 'winter') {
    return `winter-sway ${Math.floor(Math.random() * 15) + 5}s linear forwards infinite`;
  }
  else if(season === 'spring') {
    return `none`;
  }
  else if(season === 'summer') {
    
  }
  else {
    return `none`;
    return `winter-sway ${Math.floor(Math.random() * 15) + 5}s linear forwards infinite`;
    return `fall-sway ${Math.floor(Math.random() * 15) + 5}s alternate infinite ease-in-out`;
  }
}
const generateFilter = season => {
  if(season === 'winter') {

  }
  else if(season === 'spring') {

  }
  else if(season === 'summer') {
    
  }
  else {
    return `brightness(${Math.random() * .5 + .5}) hue-rotate(${Math.floor(Math.random() * 80) - 20}deg)`;
    return `hue-rotate(${Math.floor(Math.random() * 180) - 60}deg)`;
  }
}
const generateTransform = season => {
  if(season === 'winter') {

  }
  else if(season === 'spring') {
    return `rotate(-15deg)`;
  }
  else if(season === 'summer') {

  }
  else {
    return `rotate(-15deg) translate(-50%, 0)`;
    return `rotate(${Math.floor(Math.random() * 360)}deg)`;
  }
}
const Alert = props => {

  /*  Create droplets  */
  let droplets = [];
  for(let i = 0; i < 100; i++) {
    const currentSeason = getCurrentSeason(new Date().getMonth());
    const dropping = generateAnimationDropping(currentSeason);
    const swaying = generateAnimationSwaying(currentSeason);
    const filter = generateFilter(currentSeason);
    const transform = generateTransform(currentSeason);
    const dropletContainerStyle = {
      animation: `${dropping}, ${swaying}`,
      left: `${i}%`,
      top: `-${Math.floor(Math.random() * 50) + 50}%`,
      position: 'fixed',
      filter
    }
    const dropletStyle = {
      height: props.dropletSize,
      width: 'auto',
      transform
    }
    droplets.push((
      <div style={dropletContainerStyle} key={`droplet-${i}`}>
        <div style={dropletStyle}>
          {props.dropletImage}
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