import React, { useState } from 'react';
import {
  backgroundContainerStyle,
  foregroundContainerStyle,
  innerContentStyle
} from './styles';
import * as Functions from './functions'
import './animations.css';

const Season = props => {
  let season = null;
  if(props.season) season = props.season === 'winter' ? 1 : props.season === 'spring' ? 4 : props.season === 'summer' ? 7 : 9;
  const seasonInfo = Functions.getCurrentSeason(season || new Date().getMonth());
  const [currentSeason, setCurrentSeason] = useState(props.season || seasonInfo.season);
  const [currentDropletImage, setCurrentDropletImage] = useState(props.droplet || seasonInfo.dropletImage);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(props.background || seasonInfo.backgroundImage);

  const updateSeason = month => {
    if(parseInt(month) === -1) {
      setCurrentSeason('custom');
      setCurrentDropletImage(props.droplet);
      setCurrentBackgroundImage(props.background);
      return;
    }
    const seasonInfo = Functions.getCurrentSeason(month);
    setCurrentSeason(seasonInfo.season);
    setCurrentDropletImage(seasonInfo.dropletImage);
    setCurrentBackgroundImage(seasonInfo.backgroundImage);
  }

  /*  Create droplets  */
  let droplets = [];
  const multiplier = currentSeason === 'summer' ? 100 : 10
  for(let i = 0; i < (window.innerWidth / multiplier); i++) {
    const dropping = Functions.generateAnimationDropping(currentSeason);
    const swaying = Functions.generateAnimationSwaying(currentSeason);
    const filter = Functions.generateFilter(currentSeason);
    const transform = Functions.generateTransform(currentSeason);
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
      <span style={innerContentStyle}>
        {props.innerContent}
      </span>
      <div>
        {droplets}
      </div>
      {props.development ? (
        <select value={'DEFAULT'} style={{ zIndex: 2 }} onChange={e => updateSeason(e.target.value)}>
          <option value={'DEFAULT'} disabled>Select Season</option>
          <option value={1}>Winter</option>
          <option value={3}>Spring</option>
          <option value={7}>Summer</option>
          <option value={9}>Fall</option>
          <option value={-1}>Custom</option>
        </select>
      ) : null}
  </div>)
}

export default Season;
