start = new Date().getTime();

maxCount = 20000000;


for (var n = 0; n < maxCount; n++) {
    n += 1;
}

elapsed = new Date().getTime() - start;

assert(true, "elapsed time is " + elapsed);


function assert(boolean, text) {
    if ( boolean == true ) {
        alert(text);
    } else {
        alert("Failed to test " + text);
    }
}