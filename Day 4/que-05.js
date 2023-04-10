students = [{name:"Ram", score: 90},{ name:"Raj",score: 95},{name:"Ravi",score:85},];
topmark= students.reduce(
    (a, b) => (a.score > b.score ? a : b)
  );
  console.log(topmark);