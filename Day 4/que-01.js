Array = [1, 3, 2, 5, 10];
newArray = Array.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(newArray);