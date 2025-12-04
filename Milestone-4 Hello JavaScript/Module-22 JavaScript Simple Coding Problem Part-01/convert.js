function inchToFeet (inch) {
    const feetNumber = parseInt(inch / 12);
    const inchRemaning = inch % 12;
    const result = feetNumber + " ft " + inchRemaning + " inch";
    return result;
}

const sihabHeight = inchToFeet(75);
console.log(sihabHeight);

function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(mileToKilometer(20));


function isLeapYear(year){
    if(year % 100 !==0 && year % 4 === 0){
        return true;
    } else if ( year % 100 === 0 & year % 400 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2000));