

var text = "you can see this";

function useless(callback) { return callback(); }

assert(useless(function() { return text; }) === text, "Working..");