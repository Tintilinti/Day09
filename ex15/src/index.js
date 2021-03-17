function myDoWhile() {
    var myNumbers = [];
    var i = 0;
    do {
        myNumbers.push(i);
        i++;
    } while (i < 10);
    return myNumbers.join(', ');
}
myDoWhile();
console.log(myDoWhile());
module.exports = myDoWhile;