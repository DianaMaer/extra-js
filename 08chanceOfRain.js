// create a function chanceOfRain, 
//that will return the probability of rain in percentage, 
//based on a random number received from Math.random() method.

const chanceOfRain  = () => {
    const randomNumber = Math.floor(Math.random()*100);
    return randomNumber;
}

console.log(`${chanceOfRain()}%`);