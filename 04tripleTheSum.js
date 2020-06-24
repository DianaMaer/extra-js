// create a function called triple, 
//that receives a number as argument and returns it multiplied by 3.

// create a function called tripleTheSum that receives 
//2 numbers as arguments, add both numbers and return the triple 
//of the result, by calling the triple function.

const triple = (number) => {
    return number*3;
}

const tripleTheSum = (number1, number2) => {
    const sum = number1+number2;
    return triple(sum);
}

console.log(tripleTheSum(2,3));
console.log(tripleTheSum(4,6));