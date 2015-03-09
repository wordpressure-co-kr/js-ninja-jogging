
//function assert( value, desc ) {
//
//}

/*window.onload = function() {
	assert(true, "The test suite is running.");
	assert(false, "Fail!");
}*/

;(function(){
	var results;
	this.assert = function assert(value, desc) {
	
		var li = document.createElement("li");
		li.className = value ? "pass" : "fail";
		li.appendChild(document.createTextNode(desc));
	//	document.getElementById("results").appendChild(li);
		results.appendChild(li);	
		if (!value) {
			li.parentNode.parentNode.className = "fail";
		}
	
		return li;		
	};
	//this.assert(true,'works this way');
	this.test = function test(name, fn) {
		results = document.getElementById("result");
		results = assert(true, name).appendChild(
			document.createElement("ul")
		);
		fn();
	}
})();

window.onload = function() {
	test("A test.", function() {
		assert(true, "First assertion completed");
		assert(true, "Second assertion completed");
		assert(true, "Third assertion completed");
	});

	test("Another Test.", function() {
		assert(true, "First test completed");
		assert(false, "Second test failed");
		assert(true, "Third assertion completed");
	});

	test("A third test.", function() {
		assert(null, "Fail");
		assert(5, "pass")
	});
};

