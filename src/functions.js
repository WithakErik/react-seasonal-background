/*  imports images  */
import WinterBackground from './images/winter.png';
import SpringBackground from './images/spring.png';
import SummerBackground from './images/summer.png';
import FallBackground from './images/fall.png';
import WinterDroplet from './images/snowflake.png';
import SpringDroplet from './images/raindrop.png';
import SummerDroplet from './images/feather.png';
import FallDroplet from './images/leaf.png';

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

export {
    getCurrentSeason
    ,generateAnimationDropping
    ,generateAnimationSwaying
    ,generateFilter
    ,generateTransform
}