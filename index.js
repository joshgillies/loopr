module.exports = function loopr(input, output, callback) {
  var lines = input
    , length = lines.length
    , i = 0;

  for ( ; i < length; i++) {
    callback(i, lines[i], output)
  }

  return output;

};
