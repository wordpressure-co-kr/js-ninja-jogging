
function assert( value, desc ) {
	var li = document.CreateElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results").appendChild(li);
}

window.lonload = function() {
	assert(true, "The test suite is running.");
	assert(false, "Fail!");
}