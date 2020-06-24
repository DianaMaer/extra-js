// create a function area that will receive 
//the radius value as a parameter and return the area of the circle.

const area = (radius) => {
    return (Math.PI*Math.pow(radius,2)).toFixed(4);
}

console.log(area(4));