string = ["Vasanth", "Ram", "Raju", "Lakshman","Ravi"];
longest = string.reduce(function(a, b) { 
    return a.length > b.length ? a : b
  }, '');
  console.log(longest);