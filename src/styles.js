module.exports.innerContentStyle = {
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1
};
module.exports.backgroundContainerStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
module.exports.foregroundContainerStyle = (length, delay) => {
  return {
    height: "100%",
    width: "100%",
    position: "absolute",
    background: "white",
    animation: `fade ${length || 5}s ${delay || 3}s forwards linear`
  }
};
