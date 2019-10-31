module.exports.alertContainerStyle = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1
}
module.exports.backgroundContainerStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "black"
};
module.exports.foregroundContainerStyle = {
  height: "100%",
  width: "100%",
  position: "absolute",
  background: "forestgreen",
  animation: "fade 10s 3s forwards linear"
};
module.exports.logoStyle = {
  top: 0,
  textAlign: "center",
  position: "absolute"
};



/*  Animations  */
module.exports.fadeAnimation = `@keyframes fade {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
}`;
module.exports.fallDropAnimation = `@keyframes fall-drop {
  from {
      top: -10%;
  }
  to {
      top: 110%;
  }
}`;
module.exports.fallSwayAnimation = `@keyframes fall-sway {
  0% {
      transform: rotateZ(-15deg) rotateX(55deg) translate(69px, 0);
  }
  30% {
      transform: rotateZ(20deg) rotateX(60deg) translate(-69px, 0);
      animation-timing-function: ease-in-out;
  }
  60% {
      transform: rotateZ(-20deg) rotateX(55deg) translate(69px, 0);
      animation-timing-function: ease-in-out;
  }
  100% {
      transform: rotateZ(0deg) rotateX(58deg) translate(-69px, 0);
      animation-timing-function: cubic-bezier(0.99, 0, 0.89, 0.435);
  }
}`;
module.exports.springDropAnimation = `@keyframes spring-drop {
  0% {
    top: -25%;
    margin-left: -25%;
  }
  100% {
    top: 125%;
    margin-left: 25%;
    transform: rotate(15deg);
  }
}`;
module.exports.winterSwayAnimation = `@keyframes winter-sway {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;