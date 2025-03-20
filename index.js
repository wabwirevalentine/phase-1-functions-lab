// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const headQLocation = 42;
  return Math.abs(someValue - headQLocation);
}

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distance = Math.abs(destination - start) * feetPerBlock;

  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance <= 400) {
    return 0;
  } else if (distance > 2000) {
    return 25;
  } else {
    return (distance - 400) * 0.02;
  }
}
