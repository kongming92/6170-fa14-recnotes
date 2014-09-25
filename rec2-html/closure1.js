var f = function() {
  var x = 1;
  return function() {
    return ++x;
  };
};
