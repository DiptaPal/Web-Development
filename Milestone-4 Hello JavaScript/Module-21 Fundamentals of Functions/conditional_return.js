function isEvent(number){
    if(number % 2 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isEvent(5));
console.log(isEvent(110));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(32));
console.log(isOdd(33));