module.exports = function loopr(input, output, callback) {
  var length = input.length
    , i = 0;

  for ( ; i < length; i++) {
    callback(i, input[i], output)
  }

  return output;

};
