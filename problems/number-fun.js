function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (typeof n === "number"){
    if (n < 1 || n > 1000000){
      throw new Error('Not in range. Choose from 1 to 1000000');
    }
    
    return 1 / n;
  } else {
    throw new TypeError('Not a number');
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
