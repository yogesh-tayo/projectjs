
function RunCallback(a, b, cb) {
    
    let m=(a+b);
    return cb(m);
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
}

module.exports = RunCallback;
