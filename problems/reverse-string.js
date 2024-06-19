module.exports = function reverseString(string) {
  let reversed = "";

  if (typeof string === "string"){
    for (let i = string.length - 1; i >= 0; i--){
      reversed += string[i];
    };

    return reversed;

  } else {
    throw new TypeError('Not a string');
  }

};
