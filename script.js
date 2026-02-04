// YOUR CODE HERE

// getRandomInt() - gets a random number between 1 and 100
const getRandomInt = () => (
  Math.floor(Math.random() * 100) + 1
)
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.
const is_dark = (hexNum) => {
  const rgb = hexNum
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((c) => parseInt(c, 16));
  
  console.log( rgb);
  const average =  rgb.reduce((a, b) => a + b, 0) /  rgb.length;

  return true ? average < 119 : false;
};