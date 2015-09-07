

var text = "you can see this";

function useless(callback) { return callback(); }

assert(useless(function() { return text; }) === text, "Working..");



function isNimble() { return true; }

assert(typeof window.isNimble === 'function', "isNimble correctly defined");
assert(isNimble.name === 'isNimble', "isNimble's name is isNimble");

