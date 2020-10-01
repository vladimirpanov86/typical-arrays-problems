
exports.min = function min (array) {
  if(array instanceof Array && array !== undefined && array.length > 0 ) return Math.min.apply(null, array);
  return 0;
}

exports.max = function max (array) {
  if(array instanceof Array && array !== undefined && array.length > 0 ) return Math.max.apply(null, array);
  return 0
}


exports.avg = function avg (array) {
  if(array instanceof Array && array !== undefined && array.length > 0 ) return array.reduce((a, b) => (a + b)) / array.length;;
  return 0;
}
