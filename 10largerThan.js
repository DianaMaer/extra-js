// create a function largerThan that will receive 
//2 numbers as parameters and return the largest number only

const largerThan = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
      if (num2 > num1) {
          return num2
        }
    else return `Equal numbers`;
}
}

console.log(largerThan(2,3));
console.log(largerThan(5,3));
console.log(largerThan(3,3));