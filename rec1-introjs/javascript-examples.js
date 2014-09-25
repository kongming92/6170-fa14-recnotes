[1] // Variables

var x = 3;

var str = 'hello world';

var f = function() {
  return 'hello!';
};


[2] // Scope
/* In C/Java:
  int main() {
    int i = 0;
    if (i < 5) {
      int j = 3;
      printf(j);
      ++i;
    }
    return i
  }
*/
// What is the scope of i?
// What is the scope of j?

var f = function() {
  var i = 0;
  if (i < 5) {
    var j = 3;
  }
  console.log(i);
  console.log(j); // Does this work?
}
// Can I access i or j here?


[3] // Functions, or variables?

function hello(text) {
  console.log(text);
}

var hello = function(text) {
  console.log(text);
};


[4] // First class functions

var f = function() {
  console.log('hi from f');
};

// A function passed in as an argument
var g = function(func) {
  console.log('in g')
  func();
};

g(function() {
  console.log('hi');
});

g(f);

// Return a function
var h = function() {
  return function(str) {
    console.log(str);
  };
};

// What is the type of h?
// What is the type of the invocation of h?
h();
var foo = h();
foo('hello');

var fact = function(n) {
  if (n < 1) { return 1; }
  return n * fact(n-1);
};
fact(5);

// Execute a function on the fly
(function fact(n) {
  if (n < 1) { return 1; }
  return n * fact(n-1);
})(5);
// Is fact defined here?


[5] // Closures

var closure = function() {
  var str = "hello";
  return function() {
    console.log(str);
  };
};
// What is the type of closure?
closure();
closure()();
// Is str defined here?

var state = "now off";  // this is global!
var flipLightSwitch = function() {
  if (state === "now off") {
    state = "now on";
  } else {
    state = "now off";
  }
  return state;
}

var flipLightSwitch = (function() {
  var state = "now off";
  return function(){
    if (state === "now off") {
      state = "now on";
    } else {
      state = "now off";
    }
    return state;
  };
})();
// can we access state from here?


[6] // Challenge

var foo = function() {
  var bar;
  for (var i = 0; i < 5; ++i) {
    if (i == 3) {
      bar = function () {
        console.log(i);
      }
    }
  }
  return bar;
}

var foo = function() {
  var bar;
  for (var i=0; i < 5; ++i) {
    if (i == 3) {
      bar = (function(index) {
        return function() {
          console.log(index);
        }
      })(i);
    }
  }
  return bar;
}
