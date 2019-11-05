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

/*  imports images  */
import WinterBackground from './images/winter.png';
import SpringBackground from './images/spring.png';
import SummerBackground from './images/summer.png';
import FallBackground from './images/fall.png';
import WinterDroplet from './images/snowflake.png';
import SpringDroplet from './images/raindrop.png';
import SummerDroplet from './images/feather.png';
import FallDroplet from './images/leaf.png';


/*  imports animations  */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallDropAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallSwayAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(springDropAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(winterSwayAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(summerSwayAnimation, styleSheet.cssRules.length);

const getCurrentSeason = month => {
  if(month === 11|| month < 2) {
    return { season: 'winter', dropletImage: WinterDroplet, backgroundImage: WinterBackground};
  }
  else if(month < 5) {
    return { season: 'spring', dropletImage: SpringDroplet, backgroundImage: SpringBackground};
  }
  else if(month < 8) {
    return { season: 'summer', dropletImage: SummerDroplet, backgroundImage: SummerBackground};
  }
  else {
    return { season: 'fall', dropletImage: FallDroplet, backgroundImage: FallBackground};
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
    return `brightness(${Math.random() * .5 + .5}) hue-rotate(${Math.random() * 60 - 30}deg)`;
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
  const seasonInfo = getCurrentSeason(new Date().getMonth());
  const [currentSeason, setCurrentSeason] = useState(seasonInfo.season);
  const [currentDropletImage, setCurrentDropletImage] = useState(props.droplet || seasonInfo.dropletImage);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(props.background || seasonInfo.backgroundImage);

  // useEffect(() => {
  //   console.log('updating season');
  //   const seasonInfo = getCurrentSeason(month);
  // }, [currentSeason])

  const updateSeason = month => {
    console.log('month', month);
    const seasonInfo = getCurrentSeason(month);
    setCurrentSeason(seasonInfo.season);
    setCurrentDropletImage(seasonInfo.dropletImage);
    setCurrentBackgroundImage(seasonInfo.backgroundImage);
  }

  /*  Create droplets  */
  let droplets = [];
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
      transform,
      opacity: `${currentSeason === 'spring' ? Math.random() * 1 : 1}`,
    }
    droplets.push((
      <div style={dropletContainerStyle} key={`droplet-${i}`}>
        <div style={dropletStyle}>
          <img height={currentSeason === 'spring' ? '25px' : '50px'} width="auto" src={currentDropletImage} />
        </div>
      </div>
    ))
  }
  return (
    <div style={{...backgroundContainerStyle, background: `url(${currentBackgroundImage}) center / cover no-repeat fixed`, backgroundSize: 'cover'}}>
      <div style={foregroundContainerStyle}></div>
      <span style={alertContainerStyle}>
        {props.alertContainer}
      </span>
      <div>
        {droplets}
      </div>
      <select style={{zIndex: 2}} onChange={e => updateSeason(e.target.value)}>
        <option value="1">Winter</option>
        <option value="3">Sping</option>
        <option value="7">Summer</option>
        <option value="9">Fall</option>
      </select>
  </div>)
}

export default Alert;
