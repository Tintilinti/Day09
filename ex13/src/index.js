function inverseWhile() {
    var fiveNumbers = [];
    var i = 5;
    while(i >= 0) {
        fiveNumbers.push(i);
        i--;
    }
    return fiveNumbers.join(',');
}
console.log(inverseWhile());
module.exports = inverseWhile;