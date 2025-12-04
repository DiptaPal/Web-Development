const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number
        }
    }
     return max;
}

function getMin(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number < max){
            max = number
        }
    }
     return max;
}

const max = getMax(heights);
const min = getMin(heights);
console.log("Max value is: ", max);
console.log("Min value is: ", min);