string = ["Vasanth", "Ram", "Raju", "Lakshman","Ravi"];
sum= string.reduce(function (x, y) {
    return x+y.length;
}, 0);
console.log(sum)