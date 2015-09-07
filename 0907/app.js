

var text = "you can see this";

function useless(callback) { return callback(); }

assert(useless(function() { return text; }) === text, "Working..");



function isNimble() { return true; }

assert(typeof window.isNimble === 'function', "isNimble correctly defined");
assert(isNimble.name === 'isNimble', "isNimble's name is isNimble");

var canFly = function() { return true; }

assert(typeof window.canFly === 'function', "canFly correctly defined in window scope");
assert(canFly.name === '', "canFly doesn't contain name property");
