// create a function perimeter that will 
//receive the radius number as an argument, 
//and return the perimeter of the circle

const perimeter = (radius) => {
    return (2*Math.PI*radius).toFixed(4);
}

console.log(perimeter(4));
