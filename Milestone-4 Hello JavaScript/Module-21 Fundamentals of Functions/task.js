function count_zero(str){
    const totalZero = str.match(/0/g);
    return totalZero.length;
}

const result = count_zero('10001010');
console.log(result);