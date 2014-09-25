var Counter = function() {
  var i = 0;
  var self = {};
  self.inc = function() {
    return ++i;
  };
  return self;
};

var Counter = function() {
  var i = 0;
  var self = Object.create(Counter.prototype);
  self.inc = function() {
    return ++i;
  };
  Object.freeze(self);
  return self;
};

var CounterFrom = function(i) {
  var self = Object.create(CounterFrom.prototype);
  self.inc = function() {
    return ++i;
  };
  self.dec = function() {
    return --i;
  };
  Object.freeze(self);
  return self;
};
