
function assert( value, desc ) {
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results").appendChild(li);
}

window.onload = function() {
	assert(true, "The test suite is running.");
	assert(false, "Fail!");
}

;(function(){
	var results;
	this.assert = assert;
	this.assert(true,'works this way');
	return 0;
})();
