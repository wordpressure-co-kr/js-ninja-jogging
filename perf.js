
function assert(test, declare) {
    result = test == true ? declare : "Failed to test " + declare; 
    console.log(result);
}

function timer(each) {
    start = new Date().getTime();

    // each example
    // for (var n = 0; n < maxCount; n++) {
    //     n += 1;
    // }
    each();

    return elapsed = new Date().getTime() - start;
}