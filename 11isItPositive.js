// create the function isItPositive that will 
//receive a number as argument and return:
// 1 if the number is positive, 0 if the number received 
//is zero and -1 if the number received is negative

const isItPositive = (number) => {
    if (number > 0) { 
        return 1
    } else if (number < 0) {
        return -1
    } else return 0;
}

console.log(isItPositive(3));
console.log(isItPositive(0));
console.log(isItPositive(-6));
