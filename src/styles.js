module.exports.foregroundContainerStyle = (length, delay) => {
  return {
    animation: `fade ${length || 5}s ${delay || 3}s forwards linear`
  }
};
